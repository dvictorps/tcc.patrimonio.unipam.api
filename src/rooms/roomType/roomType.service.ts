import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Request, Response } from 'express'
import { RoomTypeDto } from './dto/roomType.dto';

@Injectable()
export class RoomTypeService {
    constructor(private prisma: PrismaService) { }

    async registerRoomType(dto: RoomTypeDto) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { DescricaoTipoSala } = dto;

        const checkRoomType = await this.prisma.tiposala.findUnique({ where: { DescricaoTipoSala: DescricaoTipoSala } });

        if (checkRoomType) throw new BadRequestException('A sala que você quer cadastrar já existe')

        await this.prisma.tiposala.create({
            data: {
                DescricaoTipoSala: DescricaoTipoSala
            }
        })

        return { message: 'Sala cadastrada com sucesso' }

    }

    async getRoomTypes() {
        return await this.prisma.tiposala.findMany({
            select: {
                IdTipoSala: true,
                DescricaoTipoSala: true,
            }
        })
    }

    async getRoomType(id: string) {

        const findRoomType = await this.prisma.tiposala.findUnique({ where: { IdTipoSala: parseInt(id) } })

        if (!findRoomType) throw new NotFoundException('Essa sala não existe');

        return findRoomType;
    }


    async deleteRoomType(id: string) {

        const findRoomType = await this.prisma.tiposala.findUnique({ where: { IdTipoSala: parseInt(id) } });

        if (!findRoomType) throw new NotFoundException('A sala que você quer remover não existe');

        await this.prisma.tiposala.delete({
            where: {
                IdTipoSala: parseInt(id)
            }
        })

        return { message: 'sala removida com sucesso' }

    }

    async updateRoomType(dto: RoomTypeDto, id: string) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { DescricaoTipoSala } = dto;

        const [findRoomType, checkRoomType] = await Promise.all([
            this.prisma.tiposala.findUnique({ where: { IdTipoSala: parseInt(id) } }),
            this.prisma.tiposala.findUnique({ where: { DescricaoTipoSala: DescricaoTipoSala } })
        ])

        if (!findRoomType) throw new NotFoundException('A sala que você quer editar não existe')
        if (checkRoomType) throw new BadRequestException('A sala que você quer adicionar já existe')

        await this.prisma.tiposala.update({
            data: {
                DescricaoTipoSala: DescricaoTipoSala,
            },
            where: {
                IdTipoSala: parseInt(id),
            }
        })

        return { message: 'sala atualizada com sucesso' }
    }

}
