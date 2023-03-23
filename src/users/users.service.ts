import { Injectable } from '@nestjs/common';
import { ForbiddenException, NotFoundException } from '@nestjs/common/exceptions';
import { Request } from 'express';
import { PrismaService } from 'prisma/prisma.service';

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
}
