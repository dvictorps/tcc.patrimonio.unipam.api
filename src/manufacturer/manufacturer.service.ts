import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Request, Response } from 'express'
import { ManufacturerDto } from './dto/manufacturer.dto';

@Injectable()
export class ManufacturerService {
    constructor(private prisma: PrismaService) { }

    async registerManufacturer(dto: ManufacturerDto) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { NomeFabricante } = dto;

        const checkManufacturer = await this.prisma.fabricante.findUnique({ where: { NomeFabricante: NomeFabricante } });

        if (checkManufacturer) throw new BadRequestException('A situacao que você quer cadastrar já existe')

        await this.prisma.fabricante.create({
            data: {
                NomeFabricante: NomeFabricante
            }
        })

        return { message: 'Fabricante cadastrada com sucesso' }

    }

    async getManufacturers() {
        return await this.prisma.fabricante.findMany({
            select: {
                IdFabricante: true,
                NomeFabricante: true,
            }
        })
    }

    async getManufacturer(id: string) {

        const findManufacturer = await this.prisma.fabricante.findUnique({ where: { IdFabricante: parseInt(id) } })

        if (!findManufacturer) throw new NotFoundException('Essa fabricante não existe');

        return findManufacturer;
    }


    async deleteManufacturer(id: string) {

        const findManufacturer = await this.prisma.fabricante.findUnique({ where: { IdFabricante: parseInt(id) } });

        if (!findManufacturer) throw new NotFoundException('A Fabricante que você quer remover não existe');

        await this.prisma.fabricante.delete({
            where: {
                IdFabricante: parseInt(id)
            }
        })

        return { message: 'Fabricante removida com sucesso' }

    }

    async updateManufacturer(dto: ManufacturerDto, id: string) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { NomeFabricante } = dto;

        const [findManufacturer, checkManufacturer] = await Promise.all([
            this.prisma.fabricante.findUnique({ where: { IdFabricante: parseInt(id) } }),
            this.prisma.fabricante.findUnique({ where: { NomeFabricante: NomeFabricante } })
        ])

        if (!findManufacturer) throw new NotFoundException('A fabricante que você quer editar não existe')
        if (checkManufacturer) throw new BadRequestException('O nome que você quer colocar já existe')

        await this.prisma.fabricante.update({
            data: {
                NomeFabricante: NomeFabricante,
            },
            where: {
                IdFabricante: parseInt(id),
            }
        })

        return { message: 'Fabricante atualizada com sucesso' }
    }

}
