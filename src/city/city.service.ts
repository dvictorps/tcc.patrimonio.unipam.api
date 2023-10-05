import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Request, Response } from 'express'
import { CityDto } from './dto/city.dto';
import { CityUpdateDto } from './dto/city.update.dto';

@Injectable()
export class CityService {
    constructor(private prisma: PrismaService) { }

    async registerCity(dto: CityDto) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { NomeCidade, IdEstado } = dto;

        const [checkCity, checkState] = await Promise.all([
            this.prisma.cidade.findUnique({ where: { NomeCidade: NomeCidade } }),
            this.prisma.estado.findUnique({ where: { IdEstado: IdEstado } })
        ])

        if (checkCity) throw new BadRequestException('A cidade que você quer cadastrar já existe')
        if (!checkState) throw new BadRequestException('O estado que você esta selecionando não existe')

        await this.prisma.cidade.create({
            data: {
                NomeCidade: NomeCidade,
                estado: { connect: { IdEstado: IdEstado } }
            }
        })

        return { message: 'Cidade cadastrada com sucesso' }

    }

    async getCities() {
        return await this.prisma.cidade.findMany({
            select: {
                NomeCidade: true,
                IdCidade: true,
                IdEstado: true
            },
            orderBy: {
                IdCidade: 'desc'
            }
        })
    }

    async getCity(id: string) {

        const findCity = await this.prisma.cidade.findUnique({ where: { IdCidade: parseInt(id) } })

        if (!findCity) throw new NotFoundException('Essa cidade não existe');

        return findCity;
    }


    async deleteCity(id: string) {

        const findCity = await this.prisma.cidade.findUnique({ where: { IdCidade: parseInt(id) } });

        if (!findCity) throw new NotFoundException('A cidade que você quer remover não existe');

        await this.prisma.cidade.delete({
            where: {
                IdCidade: parseInt(id)
            }
        })

        return { message: 'Cidade removida com sucesso' }

    }

    async updateCity(dto: CityUpdateDto, id: string) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { NomeCidade, IdEstado } = dto;

        const [checkCityExistance, checkCityName, checkState] = await Promise.all([
            this.prisma.cidade.findUnique({ where: { IdCidade: parseInt(id) } }),
            NomeCidade ? this.prisma.cidade.findUnique({ where: { NomeCidade: NomeCidade } }) : Promise.resolve(undefined),
            IdEstado ? this.prisma.estado.findUnique({ where: { IdEstado: IdEstado } }) : Promise.resolve(undefined),
        ])

        if (!checkCityExistance) throw new NotFoundException('A cidade que você quer editar não existe');
        if (NomeCidade && checkCityName) throw new BadRequestException('Já existe uma cidade com esse nome');
        if (IdEstado && !checkState) throw new BadRequestException('Esse estado não existe');

        await this.prisma.cidade.update({
            data: {
                NomeCidade: NomeCidade,
                IdEstado: IdEstado
            },
            where: {
                IdCidade: parseInt(id),
            }
        })

        return { message: 'Cidade atualizada com sucesso' }
    }

}
