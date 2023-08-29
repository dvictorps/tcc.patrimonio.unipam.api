import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto, RegisterDto } from '../auth/dto'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { jwtSecret } from '../utils/constants'
import { Request, Response } from 'express'
import { EquipmentDto } from './dto/equipment.dto';
import { Role } from '../roles/roles.decorator';
import { EquipmentUpdateDto } from './dto/equipment.update.dto';

@Injectable()
export class EquipmentService {
    constructor(private prisma: PrismaService) { }

    async registerEquipment(dto: EquipmentDto) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { Patrimonio, DescricaoEquipamento, NumeroSerial, IdEmpresa, IdCategoriaEquipamento, IdSituacaoEquipamento, IdFabricante,
            IdDepartamento, DataAquisicao, VencimentoGarantia } = dto;

        const [findEmpresa, findCategoria, findSituacao, findFabricante, findDepartamento, checkPatrimonio, checkNumeroSerial] = await Promise.all([
            this.prisma.empresa.findUnique({ where: { IdEmpresa: IdEmpresa } }),
            this.prisma.categoriaequipamento.findUnique({ where: { IdCategoriaEquipamento: IdCategoriaEquipamento } }),
            this.prisma.situacaoequipamento.findUnique({ where: { IdSituacaoEquipamento: IdSituacaoEquipamento } }),
            this.prisma.fabricante.findUnique({ where: { IdFabricante: IdFabricante } }),
            this.prisma.departamento.findUnique({ where: { IdDepartamento: IdDepartamento } }),
            this.prisma.equipamento.findUnique({ where: { Patrimonio: Patrimonio } }),
            this.prisma.equipamento.findUnique({ where: { NumeroSerial: NumeroSerial } }),
        ]);

        if (!findEmpresa) throw new BadRequestException('A empresa que você está tentando adicionar não existe')
        if (!findCategoria) throw new BadRequestException('A categoria que você está tentando aplicar não existe')
        if (!findSituacao) throw new BadRequestException('A opção selecionada não existe')
        if (!findFabricante) throw new BadRequestException('A fabricante selecionada não existe')
        if (!findDepartamento) throw new BadRequestException('O departamento selecionado não existe')
        if (checkPatrimonio || checkNumeroSerial) throw new BadRequestException('Numero de Patrimonio ou Serial já existente')

        await this.prisma.equipamento.create({
            data: {
                Patrimonio: Patrimonio,
                DescricaoEquipamento: DescricaoEquipamento,
                NumeroSerial: NumeroSerial,
                DataAquisicao: new Date(DataAquisicao),
                VencimentoGarantia: new Date(VencimentoGarantia),
                empresa: { connect: { IdEmpresa: IdEmpresa } },
                categoriaequipamento: { connect: { IdCategoriaEquipamento: IdCategoriaEquipamento } },
                situacaoequipamento: { connect: { IdSituacaoEquipamento: IdSituacaoEquipamento } },
                fabricante: { connect: { IdFabricante: IdFabricante } },
                departamento: { connect: { IdDepartamento: IdDepartamento } },
            }
        })

        return { message: 'Equipamento cadastrado com sucesso' }


    }

    async getEquipments() {
        return await this.prisma.equipamento.findMany({
            take: 10,
            select: {
                IdEquipamento: true,
                Patrimonio: true,
                NumeroSerial: true,
                categoriaequipamento: true,
                DescricaoEquipamento: true,
                empresa: true,
                fabricante: true,
                DataCadastro: true,
                DataAquisicao: true,
                DataModificacao: true,
                VencimentoGarantia: true,
                situacaoequipamento: true
            }
        })
    }

    async getEquipment(id: string) {
        const findEquipment = await this.prisma.equipamento.findUnique({ where: { IdEquipamento: parseInt(id) } })
        if (!findEquipment) throw new NotFoundException;

        return { findEquipment };
    }

    async deleteEquipment(id: string) {

        const findEquipment = await this.prisma.equipamento.findUnique({ where: { IdEquipamento: parseInt(id) } })
        if (!findEquipment) throw new NotFoundException;

        await this.prisma.equipamento.delete({
            where: {
                IdEquipamento: parseInt(id)
            }
        })

        return { message: 'Equipamento excluido com suceesso' }
    }

    async updateEquipment(dto: EquipmentUpdateDto, id: string) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { Patrimonio, DescricaoEquipamento, NumeroSerial, IdEmpresa, IdCategoriaEquipamento, IdSituacaoEquipamento, IdFabricante,
            IdDepartamento, DataAquisicao, VencimentoGarantia } = dto;

        const [findEmpresa, findCategoria, findSituacao, findFabricante, findDepartamento, checkPatrimonio, checkNumeroSerial, checkEquipamento] = await Promise.all([
            IdEmpresa ? this.prisma.empresa.findUnique({ where: { IdEmpresa: IdEmpresa } }) : Promise.resolve(undefined),
            IdCategoriaEquipamento ? this.prisma.categoriaequipamento.findUnique({ where: { IdCategoriaEquipamento: IdCategoriaEquipamento } }) : Promise.resolve(undefined),
            IdSituacaoEquipamento ? this.prisma.situacaoequipamento.findUnique({ where: { IdSituacaoEquipamento: IdSituacaoEquipamento } }) : Promise.resolve(undefined),
            IdFabricante ? this.prisma.fabricante.findUnique({ where: { IdFabricante: IdFabricante } }) : Promise.resolve(undefined),
            IdDepartamento ? this.prisma.departamento.findUnique({ where: { IdDepartamento: IdDepartamento } }) : Promise.resolve(undefined),
            Patrimonio ? this.prisma.equipamento.findUnique({ where: { Patrimonio: Patrimonio } }) : Promise.resolve(undefined),
            NumeroSerial ? this.prisma.equipamento.findUnique({ where: { NumeroSerial: NumeroSerial } }) : Promise.resolve(undefined),
            this.prisma.equipamento.findUnique({ where: { IdEquipamento: parseInt(id) } })
        ]);

        if (!checkEquipamento) throw new NotFoundException('O equipamento que você quer editar não existe')
        if (IdEmpresa && !findEmpresa) throw new NotFoundException('A empresa que você está tentando adicionar não existe')
        if (IdCategoriaEquipamento && !findCategoria) throw new NotFoundException('A categoria que você está tentando aplicar não existe')
        if (IdSituacaoEquipamento && !findSituacao) throw new NotFoundException('A opção selecionada não existe')
        if (IdFabricante && !findFabricante) throw new NotFoundException('A fabricante selecionada não existe')
        if (IdDepartamento && !findDepartamento) throw new NotFoundException('O departamento selecionado não existe')
        if (checkPatrimonio || checkNumeroSerial) throw new BadRequestException('Numero de Patrimonio ou Serial já existente')

        const updatedDataAquisicao = DataAquisicao ? new Date(DataAquisicao) : undefined;
        const updatedVencimentoGarantia = VencimentoGarantia ? new Date(VencimentoGarantia) : undefined;

        await this.prisma.equipamento.update({
            data: {
                Patrimonio: Patrimonio,
                DescricaoEquipamento: DescricaoEquipamento,
                NumeroSerial: NumeroSerial,
                DataAquisicao: updatedDataAquisicao,
                VencimentoGarantia: updatedVencimentoGarantia,
                IdEmpresa: IdEmpresa,
                IdCategoriaEquipamento: IdCategoriaEquipamento,
                IdSituacaoEquipamento: IdSituacaoEquipamento,
                IdFabricante: IdFabricante,
                IdDepartamento: IdDepartamento,
                DataModificacao: new Date()
            },
            where: {
                IdEquipamento: parseInt(id)
            }
        })

        return { message: 'Equipamento atualizado com sucesso' }


    }



}
