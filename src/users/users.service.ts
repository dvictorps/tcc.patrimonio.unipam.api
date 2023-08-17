import { Injectable } from '@nestjs/common';
import { BadRequestException, NotFoundException } from '@nestjs/common/exceptions';
import { PrismaService } from 'prisma/prisma.service';
import * as bcrypt from 'bcrypt'
import { UpdateUserDto } from './dto/user.update.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async getMyUser(id: string) {

        const user = await this.prisma.pessoa.findUnique({ where: { IdPessoa: parseInt(id) } })

        if (!user) throw new NotFoundException()

        delete user.Senha

        return { user }

    }

    async getUsers() {
        return await this.prisma.pessoa.findMany({ select: { IdPessoa: true, Usuario: true, DataCriacao: true, } })
    }

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

    async deleteUser(id: string) {

        const findUser = await this.prisma.pessoa.findUnique({ where: { IdPessoa: parseInt(id) } })

        if (!findUser) throw new BadRequestException('O usuário que você está buscando não existe.')

        await this.prisma.pessoa.delete({
            where: {
                IdPessoa: parseInt(id)
            }
        })

        return { message: 'Usuário excluido com suceesso' }

    }


}
