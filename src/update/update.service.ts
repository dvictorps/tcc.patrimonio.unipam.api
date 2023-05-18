import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto, RegisterDto } from '../auth/dto'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { jwtSecret } from '../utils/constants'
import { Request, Response } from 'express'
import { UpdateUserDto } from './dto/user.update.dto';
import { Role } from '../roles/roles.decorator';

@Injectable()
export class UpdateService {
    constructor(private prisma: PrismaService) { }

    async updateUser(dto: UpdateUserDto, id: string) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { Email, Senha, IdSituacaoPessoa, IdTipoPessoa, Usuario, Nome } = dto;

        const [findUser, checkUser] = await Promise.all([
            this.prisma.pessoa.findFirst({ where: { IdPessoa: parseInt(id) }, select: { Usuario: true } }),
            this.prisma.pessoa.findFirst({ where: { Usuario: Usuario }, select: { IdPessoa: true } })
        ]);

        if (checkUser) throw new BadRequestException('o usuário que você quer colocar já existe')

        if (!findUser) throw new BadRequestException('O usuário a ser editado não existe')

        const situacaoPessoa = IdSituacaoPessoa ? await this.prisma.situacaopessoa.findUnique({ where: { IdSituacaoPessoa: IdSituacaoPessoa } }) : undefined;
        const tipoPessoa = IdTipoPessoa ? await this.prisma.tipopessoa.findUnique({ where: { IdTipoPessoa: IdTipoPessoa } }) : undefined;

        if (IdSituacaoPessoa && !situacaoPessoa) {
            throw new BadRequestException('Campo Situação Pessoa inválido');
        }

        if (IdTipoPessoa && !tipoPessoa) {
            throw new BadRequestException('Campo Tipo Pessoa inválido');
        }

        const hashedPassword = Senha ? await this.hashPassword(Senha) : undefined


        await this.prisma.pessoa.update({
            data: {
                Email: Email,
                Senha: hashedPassword,
                Nome: Nome,
                Usuario: Usuario,
                IdSituacaoPessoa: IdSituacaoPessoa,
                IdTipoPessoa: IdTipoPessoa,
            },
            where: {
                IdPessoa: parseInt(id),
            }
        })

        return { message: 'usuário atualizado com sucesso' }

    }

    async hashPassword(password: string) {
        const saltOrRounds = 10;
        return await bcrypt.hash(password, saltOrRounds)

    }

}
