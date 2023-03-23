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
    constructor(private prisma: PrismaService, private jwt: JwtService) { }

    async updateUser(dto: UpdateUserDto, id: string, req: Request) {

        const decodedUser = req.user as { id: number, user: string, role: number }

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { Email, Senha, IdSituacaoPessoa, IdTipoPessoa, Usuario, Nome } = dto;


        if (decodedUser.role !== Role.Admin) { if (decodedUser.id !== parseInt(id)) throw new ForbiddenException() }


        const findUser = await this.prisma.pessoa.findUnique({ where: { IdPessoa: parseInt(id) } })

        if (!findUser) {
            throw new BadRequestException('O usuário a ser editado não existe')
        }

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
