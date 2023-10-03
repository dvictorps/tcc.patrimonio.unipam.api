import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Request, Response } from 'express'
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) { }

    async registerCategory(dto: CategoryDto) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { DescricaoCategoriaEquipamento } = dto;

        const checkCategory = await this.prisma.categoriaequipamento.findUnique({ where: { DescricaoCategoriaEquipamento: DescricaoCategoriaEquipamento } });

        if (checkCategory) throw new BadRequestException('A categoria que você quer cadastrar já existe')

        await this.prisma.categoriaequipamento.create({
            data: {
                DescricaoCategoriaEquipamento: DescricaoCategoriaEquipamento
            }
        })

        return { message: 'Categoria cadastrada com sucesso' }

    }

    async getCategorys() {
        return await this.prisma.categoriaequipamento.findMany({
            select: {
                IdCategoriaEquipamento: true,
                DescricaoCategoriaEquipamento: true,
            }
        })
    }

    async getCategory(id: string) {

        const findCategory = await this.prisma.categoriaequipamento.findUnique({ where: { IdCategoriaEquipamento: parseInt(id) } })

        if (!findCategory) throw new NotFoundException('Essa categoria não existe');

        return { findCategory };
    }


    async deleteCategory(id: string) {

        const findCategory = await this.prisma.categoriaequipamento.findUnique({ where: { IdCategoriaEquipamento: parseInt(id) } });

        if (!findCategory) throw new NotFoundException('A categoria que você quer remover não existe');

        await this.prisma.categoriaequipamento.delete({
            where: {
                IdCategoriaEquipamento: parseInt(id)
            }
        })

        return { message: 'Categoria removida com sucesso' }

    }

    async updateCategory(dto: CategoryDto, id: string) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { DescricaoCategoriaEquipamento } = dto;

        const [findCategory, checkCategory] = await Promise.all([
            this.prisma.categoriaequipamento.findUnique({ where: { IdCategoriaEquipamento: parseInt(id) } }),
            this.prisma.categoriaequipamento.findUnique({ where: { DescricaoCategoriaEquipamento: DescricaoCategoriaEquipamento } })
        ])

        if (!findCategory) throw new NotFoundException('A categoria que você quer editar não existe')
        if (checkCategory) throw new BadRequestException('A descrição que você quer adicionar já existe')

        await this.prisma.categoriaequipamento.update({
            data: {
                DescricaoCategoriaEquipamento: DescricaoCategoriaEquipamento,
            },
            where: {
                IdCategoriaEquipamento: parseInt(id),
            }
        })

        return { message: 'Categoria atualizada com sucesso' }
    }

}
