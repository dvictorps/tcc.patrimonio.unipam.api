import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Request, Response } from 'express'
import { RoomSituationDto } from './dto/roomSituation.dto';

@Injectable()
export class RoomSituationService {
    constructor(private prisma: PrismaService) { }

    async registerRoomSituation(dto: RoomSituationDto) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { DescricaoSituacaoSala } = dto;

        const checkRoomSituation = await this.prisma.situacaosala.findUnique({ where: { DescricaoSituacaoSala: DescricaoSituacaoSala } });

        if (checkRoomSituation) throw new BadRequestException('O tipo de sala que você quer cadastrar já existe')

        await this.prisma.situacaosala.create({
            data: {
                DescricaoSituacaoSala: DescricaoSituacaoSala
            }
        })

        return { message: 'Tipo de sala cadastrada com sucesso' }

    }

    async getRoomSituations() {
        return await this.prisma.situacaosala.findMany({
            select: {
                IdSituacaoSala: true,
                DescricaoSituacaoSala: true,
            }
        })
    }

    async getRoomSituation(id: string) {

        const findRoomSituation = await this.prisma.situacaosala.findUnique({ where: { IdSituacaoSala: parseInt(id) } })

        if (!findRoomSituation) throw new NotFoundException('Esse tipo de sala não existe');

        return findRoomSituation;
    }


    async deleteRoomSituation(id: string) {

        const findRoomSituation = await this.prisma.situacaosala.findUnique({ where: { IdSituacaoSala: parseInt(id) } });

        if (!findRoomSituation) throw new NotFoundException('Esse tipo de sala que você quer remover não existe');

        await this.prisma.situacaosala.delete({
            where: {
                IdSituacaoSala: parseInt(id)
            }
        })

        return { message: 'Tipo de sala removida com sucesso' }

    }

    async updateRoomSituation(dto: RoomSituationDto, id: string) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { DescricaoSituacaoSala } = dto;

        const [findRoomSituation, checkRoomSituation] = await Promise.all([
            this.prisma.situacaosala.findUnique({ where: { IdSituacaoSala: parseInt(id) } }),
            this.prisma.situacaosala.findUnique({ where: { DescricaoSituacaoSala: DescricaoSituacaoSala } })
        ])

        if (!findRoomSituation) throw new NotFoundException('o tipo de sala que você quer editar não existe')
        if (checkRoomSituation) throw new BadRequestException('o tipo de sala que você quer adicionar já existe')

        await this.prisma.situacaosala.update({
            data: {
                DescricaoSituacaoSala: DescricaoSituacaoSala,
            },
            where: {
                IdSituacaoSala: parseInt(id),
            }
        })

        return { message: 'sala atualizada com sucesso' }
    }

}
