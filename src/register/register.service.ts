import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto, RegisterDto } from '../auth/dto'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { jwtSecret } from '../utils/constants'
import { Request, Response } from 'express'
import { EquipmentDto } from './dto/equipment.dto';
import { Role } from '../roles/roles.decorator';

@Injectable()
export class RegisterService {
    constructor(private prisma: PrismaService) { }

    async registerEquipment(dto: EquipmentDto) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { Patrimonio, DescricaoEquipamento, NumeroSerial, IdEmpresa, IdCategoriaEquipamento, IdSituacaoEquipamento, IdFabricante, IdDepartamento } = dto;

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
                DataAquisicao: new Date(),
                VencimentoGarantia: new Date(),
                DataCadastro: new Date(),
                empresa: { connect: { IdEmpresa: IdEmpresa } },
                categoriaequipamento: { connect: { IdCategoriaEquipamento: IdCategoriaEquipamento } },
                situacaoequipamento: { connect: { IdSituacaoEquipamento: IdSituacaoEquipamento } },
                fabricante: { connect: { IdFabricante: IdFabricante } },
                departamento: { connect: { IdDepartamento: IdDepartamento } },
            }
        })

        return { message: 'Equipamento cadastrado com sucesso' }


    }

}
