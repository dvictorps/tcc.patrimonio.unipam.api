import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async getMyUser(id: string) {

        const user = await this.prisma.pessoa.findUnique({ where: { IdPessoa: parseInt(id) } })

        return { user }

    }

    async getUsers() {
        return await this.prisma.pessoa.findMany({ select: { IdPessoa: true, Usuario: true, DataCriacao: true, } })
    }
}
