import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Request, Response } from 'express'
import { BlockDto } from './dto/depType.dto';

@Injectable()
export class BlockService {
    constructor(private prisma: PrismaService) { }

    async registerBlock(dto: BlockDto) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { DescricaoBlocoDepartamento } = dto;

        const checkBlock = await this.prisma.blocodepartamento.findFirst({ where: { DescricaoBlocoDepartamento: DescricaoBlocoDepartamento } });

        if (checkBlock) throw new BadRequestException('O bloco que você quer cadastrar já existe')

        await this.prisma.blocodepartamento.create({
            data: {
                DescricaoBlocoDepartamento: DescricaoBlocoDepartamento
            }
        })

        return { message: 'Bloco cadastrado com sucesso' }

    }

    async getBlocks() {
        return await this.prisma.blocodepartamento.findMany({
            select: {
                IdBlocoDepartamento: true,
                DescricaoBlocoDepartamento: true,
                departamento: true
            }
        })
    }

    async getBlock(id: string) {

        const findBlock = await this.prisma.blocodepartamento.findUnique({ where: { IdBlocoDepartamento: parseInt(id) }, select: { IdBlocoDepartamento: true, departamento: true } })

        if (!findBlock) throw new NotFoundException('Esse bloco não existe');

        return { findBlock };
    }


    async deleteBlock(id: string) {

        const findBlock = await this.prisma.blocodepartamento.findUnique({ where: { IdBlocoDepartamento: parseInt(id) } });

        if (!findBlock) throw new NotFoundException('A categoria que você quer remover não existe');

        await this.prisma.blocodepartamento.delete({
            where: {
                IdBlocoDepartamento: parseInt(id)
            }
        })

        return { message: 'Bloco removido com sucesso' }

    }

    async updateBlock(dto: BlockDto, id: string) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { DescricaoBlocoDepartamento } = dto;

        const [findBlock, checkBlock] = await Promise.all([
            this.prisma.blocodepartamento.findUnique({ where: { IdBlocoDepartamento: parseInt(id) } }),
            this.prisma.blocodepartamento.findFirst({ where: { DescricaoBlocoDepartamento: DescricaoBlocoDepartamento } })
        ])

        if (!findBlock) throw new NotFoundException('O bloco que você quer editar não existe')
        if (checkBlock) throw new BadRequestException('O bloco que você quer adicionar já existe')

        await this.prisma.blocodepartamento.update({
            data: {
                DescricaoBlocoDepartamento: DescricaoBlocoDepartamento,
            },
            where: {
                IdBlocoDepartamento: parseInt(id),
            }
        })

        return { message: 'Bloco atualizado com sucesso' }
    }

}
