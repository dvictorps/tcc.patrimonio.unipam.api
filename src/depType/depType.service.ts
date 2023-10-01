import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Request, Response } from 'express'
import { DepartamentDto } from './dto/depType.dto';

@Injectable()
export class DepTypeService {
    constructor(private prisma: PrismaService) { }

    async registerDepType(dto: DepartamentDto) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { TipoDepartamento } = dto;

        const checkDepType = await this.prisma.tipodepartamento.findFirst({ where: { TipoDepartamento: TipoDepartamento } });

        if (checkDepType) throw new BadRequestException('O tipo de departamento que você quer cadastrar já existe')

        await this.prisma.tipodepartamento.create({
            data: {
                TipoDepartamento: TipoDepartamento
            }
        })

        return { message: 'tipo de departamento cadastrado com sucesso' }

    }

    async getDepTypes() {
        return await this.prisma.tipodepartamento.findMany({
            select: {
                IdTipoDepartamento: true,
                TipoDepartamento: true,
            }
        })
    }

    async getDepType(id: string) {

        const findDepType = await this.prisma.tipodepartamento.findUnique({ where: { IdTipoDepartamento: parseInt(id) }, select: { IdTipoDepartamento: true, TipoDepartamento: true } })

        if (!findDepType) throw new NotFoundException('Esse tipo de departamento não existe');

        return { findDepType };
    }


    async deleteDepType(id: string) {

        const findDepType = await this.prisma.tipodepartamento.findUnique({ where: { IdTipoDepartamento: parseInt(id) } });

        if (!findDepType) throw new NotFoundException('O tipo de departamento que você quer remover não existe');

        await this.prisma.tipodepartamento.delete({
            where: {
                IdTipoDepartamento: parseInt(id)
            }
        })

        return { message: 'Tipo de departamento removido com sucesso' }

    }

    async updateDepType(dto: DepartamentDto, id: string) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { TipoDepartamento } = dto;

        const [findDepType, checkDepType] = await Promise.all([
            this.prisma.tipodepartamento.findUnique({ where: { IdTipoDepartamento: parseInt(id) } }),
            this.prisma.tipodepartamento.findFirst({ where: { TipoDepartamento: TipoDepartamento } })
        ])

        if (!findDepType) throw new NotFoundException('O tipo de departamento que você quer editar não existe')
        if (checkDepType) throw new BadRequestException('O tipo de departamento você quer adicionar já existe')

        await this.prisma.tipodepartamento.update({
            data: {
                TipoDepartamento: TipoDepartamento,
            },
            where: {
                IdTipoDepartamento: parseInt(id),
            }
        })

        return { message: 'Tipo de departamento atualizado com sucesso' }
    }

}
