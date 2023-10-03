import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto, RegisterDto } from '../auth/dto'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { jwtSecret } from '../utils/constants'
import { Request, Response } from 'express'
import { CompanyDto } from './dto/company.dto';
import { Role } from '../roles/roles.decorator';
import { CompanyUpdateDto } from './dto/company.update.dto';

@Injectable()
export class CompanyService {
    constructor(private prisma: PrismaService) { }

    async registerCompany(dto: CompanyDto) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { EmailEmpresa, IdCidade, NomeEmpresa, NomeRepresentante, SiteEmpresa, TelefoneEmpresa } = dto;

        const [findCidade, checkNome] = await Promise.all([
            this.prisma.cidade.findUnique({ where: { IdCidade: IdCidade } }),
            this.prisma.empresa.findUnique({ where: { NomeEmpresa: NomeEmpresa } }),
        ]);

        if (!findCidade) throw new BadRequestException('A cidade da empresa selecionada não existe no sistema')
        if (checkNome) throw new BadRequestException('O nome desta empresa já existe no sistema')

        await this.prisma.empresa.create({
            data: {
                NomeEmpresa: NomeEmpresa,
                EmailEmpresa: EmailEmpresa,
                NomeRepresentante: NomeRepresentante,
                SiteEmpresa: SiteEmpresa,
                TelefoneEmpresa: TelefoneEmpresa,
                cidade: { connect: { IdCidade: IdCidade } }
            }
        })

        return { message: 'Empresa cadastrada com sucesso' }


    }

    async getCompanys() {
        return await this.prisma.empresa.findMany({
            select: {
                IdEmpresa: true,
                NomeEmpresa: true,
                EmailEmpresa: true,
                NomeRepresentante: true,
                SiteEmpresa: true,
                TelefoneEmpresa: true,
                IdCidade: true
            }
        })
    }

    async getCompany(id: string) {
        const findCompany = await this.prisma.empresa.findUnique({ where: { IdEmpresa: parseInt(id) } })
        if (!findCompany) throw new NotFoundException;

        return findCompany;
    }

    async deleteCompany(id: string) {

        const findCompany = await this.prisma.empresa.findUnique({ where: { IdEmpresa: parseInt(id) } })
        if (!findCompany) throw new NotFoundException;

        await this.prisma.empresa.delete({
            where: {
                IdEmpresa: parseInt(id)
            }
        })

        return { message: 'Empresa excluida com suceesso' }
    }

    async updateCompany(dto: CompanyUpdateDto, id: string) {
        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { EmailEmpresa, IdCidade, NomeEmpresa, NomeRepresentante, SiteEmpresa, TelefoneEmpresa } = dto;

        const [findCidade, checkNome] = await Promise.all([
            IdCidade ? this.prisma.cidade.findUnique({ where: { IdCidade: IdCidade } }) : Promise.resolve(undefined),
            NomeEmpresa ? this.prisma.empresa.findUnique({ where: { NomeEmpresa: NomeEmpresa } }) : Promise.resolve(undefined),
        ]);

        if (!findCidade) throw new BadRequestException('A cidade selecionada não existe')
        if (checkNome) throw new BadRequestException('A empresa que você quer editar já existe')


        await this.prisma.empresa.update({
            data: {
                NomeEmpresa: NomeEmpresa,
                EmailEmpresa: EmailEmpresa,
                NomeRepresentante: NomeRepresentante,
                SiteEmpresa: SiteEmpresa,
                TelefoneEmpresa: TelefoneEmpresa,
                IdCidade: IdCidade
            },
            where: {
                IdEmpresa: parseInt(id)
            }
        })

        return { message: 'Empresa atualizada com sucesso' }


    }

}
