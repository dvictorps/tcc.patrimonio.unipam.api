import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Request, Response } from 'express'
import { SituationDto } from './dto/situation.dto';

@Injectable()
export class SituationService {
    constructor(private prisma: PrismaService) { }

    async registerSituation(dto: SituationDto) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { DescricaoSituacaoEquipamento } = dto;

        const checkSituation = await this.prisma.situacaoequipamento.findFirst({ where: { DescricaoSituacaoEquipamento: DescricaoSituacaoEquipamento } });

        if (checkSituation) throw new BadRequestException('A situacao que você quer cadastrar já existe')

        await this.prisma.situacaoequipamento.create({
            data: {
                DescricaoSituacaoEquipamento: DescricaoSituacaoEquipamento
            }
        })

        return { message: 'Situação cadastrada com sucesso' }

    }

    async getSituations() {
        return await this.prisma.situacaoequipamento.findMany({
            select: {
                IdSituacaoEquipamento: true,
                DescricaoSituacaoEquipamento: true,
            }
        })
    }

    async getSituation(id: string) {

        const findSituation = await this.prisma.situacaoequipamento.findUnique({ where: { IdSituacaoEquipamento: parseInt(id) } })

        if (!findSituation) throw new NotFoundException('Essa situação não existe');

        return { findSituation };
    }


    async deleteSituation(id: string) {

        const findSituation = await this.prisma.situacaoequipamento.findUnique({ where: { IdSituacaoEquipamento: parseInt(id) } });

        if (!findSituation) throw new NotFoundException('A Situacao que você quer remover não existe');

        await this.prisma.situacaoequipamento.delete({
            where: {
                IdSituacaoEquipamento: parseInt(id)
            }
        })

        return { message: 'Situacao removida com sucesso' }

    }

    async updateSituation(dto: SituationDto, id: string) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { DescricaoSituacaoEquipamento } = dto;

        const [findSituation, checkSituation] = await Promise.all([
            this.prisma.situacaoequipamento.findUnique({ where: { IdSituacaoEquipamento: parseInt(id) } }),
            this.prisma.situacaoequipamento.findFirst({ where: { DescricaoSituacaoEquipamento: DescricaoSituacaoEquipamento } })
        ])

        if (!findSituation) throw new NotFoundException('A categoria que você quer editar não existe')
        if (checkSituation) throw new BadRequestException('A descrição que você quer adicionar já existe')

        await this.prisma.situacaoequipamento.update({
            data: {
                DescricaoSituacaoEquipamento: DescricaoSituacaoEquipamento,
            },
            where: {
                IdSituacaoEquipamento: parseInt(id),
            }
        })

        return { message: 'Situacao atualizada com sucesso' }
    }

}
