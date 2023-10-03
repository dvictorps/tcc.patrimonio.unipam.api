import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto, RegisterDto } from '../../auth/dto'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { jwtSecret } from '../../utils/constants'
import { Request, Response } from 'express'
import { RoomDto } from './dto/room.dto';
import { Role } from '../../roles/roles.decorator';
import { RoomUpdateDto } from './dto/room.update.dto';

@Injectable()
export class RoomService {
    constructor(private prisma: PrismaService) { }

    async registerRoom(dto: RoomDto) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { IdBlocoDepartamento, IdSituacaoSala, IdTipoSala, DescricaoSala } = dto;

        const [findBloco, findSituacao, findTipo, checkNome] = await Promise.all([
            this.prisma.blocodepartamento.findUnique({ where: { IdBlocoDepartamento: IdBlocoDepartamento } }),
            this.prisma.situacaosala.findUnique({ where: { IdSituacaoSala: IdSituacaoSala } }),
            this.prisma.tiposala.findUnique({ where: { IdTipoSala: IdTipoSala } }),
            this.prisma.sala.findUnique({ where: { DescricaoSala: DescricaoSala } }),
        ]);

        if (!findBloco) throw new BadRequestException('O bloco que você está tentando adicionar não existe')
        if (!findTipo) throw new BadRequestException('O tipo de sala que você está tentando aplicar não existe')
        if (!findSituacao) throw new BadRequestException('A situacao selecionada não existe')
        if (checkNome) throw new BadRequestException('a sala cadastrada já existe')

        await this.prisma.sala.create({
            data: {
                DescricaoSala: DescricaoSala,
                blocodepartamento: { connect: { IdBlocoDepartamento: IdBlocoDepartamento } },
                situacaosala: { connect: { IdSituacaoSala: IdSituacaoSala } },
                tiposala: { connect: { IdTipoSala: IdTipoSala } }
            }
        })

        return { message: 'Sala cadastrada com sucesso' }


    }

    async getRooms() {
        return await this.prisma.sala.findMany({
            select: {
                IdSala: true,
                DescricaoSala: true,
                IdBlocoDepartamento: true,
                IdTipoSala: true,
                IdSituacaoSala: true

            }
        })
    }

    async getRoom(id: string) {
        const findRoom = await this.prisma.sala.findUnique({ where: { IdSala: parseInt(id) } })
        if (!findRoom) throw new NotFoundException;

        return findRoom;
    }

    async deleteRoom(id: string) {

        const findRoom = await this.prisma.sala.findUnique({ where: { IdSala: parseInt(id) } })
        if (!findRoom) throw new NotFoundException;

        await this.prisma.sala.delete({
            where: {
                IdSala: parseInt(id)
            }
        })

        return { message: 'Sala excluida com suceesso' }
    }

    async updateRoom(dto: RoomUpdateDto, id: string) {
        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { IdBlocoDepartamento, IdSituacaoSala, IdTipoSala, DescricaoSala } = dto;

        const [findBloco, findTipo, findSituacao, checkNome] = await Promise.all([
            IdBlocoDepartamento ? this.prisma.blocodepartamento.findUnique({ where: { IdBlocoDepartamento: IdBlocoDepartamento } }) : Promise.resolve(undefined),
            IdSituacaoSala ? this.prisma.situacaosala.findUnique({ where: { IdSituacaoSala: IdSituacaoSala } }) : Promise.resolve(undefined),
            IdTipoSala ? this.prisma.tiposala.findUnique({ where: { IdTipoSala: IdTipoSala } }) : Promise.resolve(undefined),
            DescricaoSala ? this.prisma.sala.findUnique({ where: { DescricaoSala: DescricaoSala } }) : Promise.resolve(undefined),
        ]);
        if (!findBloco) throw new BadRequestException('O bloco que você está tentando adicionar não existe')
        if (!findTipo) throw new BadRequestException('O tipo de sala que você está tentando aplicar não existe')
        if (!findSituacao) throw new BadRequestException('A situacao selecionada não existe')
        if (checkNome) throw new BadRequestException('A sala que você quer adicionar já existe')


        await this.prisma.sala.update({
            data: {
                DescricaoSala: DescricaoSala,
                IdSituacaoSala: IdSituacaoSala,
                IdBlocoDepartamento: IdBlocoDepartamento,
                IdTipoSala: IdTipoSala,
            },
            where: {
                IdSala: parseInt(id)
            }
        })

        return { message: 'Sala atualizada com sucesso' }


    }



}
