import { PrismaService } from 'prisma/prisma.service';
import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';

@Injectable()
export class DeleteService {
    constructor(private prisma: PrismaService) { }

    async deleteUser(id: string) {

        const findUser = await this.prisma.pessoa.findUnique({ where: { IdPessoa: parseInt(id) } })

        if (!findUser) {
            throw new BadRequestException('O usuário que você está buscando não existe.')
        }

        await this.prisma.pessoa.delete({
            where: {
                IdPessoa: parseInt(id)
            }
        })

        return { message: 'Usuário excluido com suceesso' }

    }

}