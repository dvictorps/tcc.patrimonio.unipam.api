import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto, RegisterDto } from '../../auth/dto'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { jwtSecret } from '../../utils/constants'
import { Request, Response } from 'express'
import { DepartmentDto } from './dto/department.dto';
import { Role } from '../../roles/roles.decorator';
import { DepartmentUpdateDto } from './dto/department.update.dto';

@Injectable()
export class DepartmentService {
    constructor(private prisma: PrismaService) { }

    async registerDepartment(dto: DepartmentDto) {

        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { IdBlocoDepartamento, IdSituacaoDepartamento, IdTipoDepartamento, NomeDepartamento } = dto;

        const [findBloco, findSituacao, findTipo, checkNome] = await Promise.all([
            this.prisma.blocodepartamento.findUnique({ where: { IdBlocoDepartamento: IdBlocoDepartamento } }),
            this.prisma.situacaodepartamento.findUnique({ where: { IdSituacaoDepartamento: IdSituacaoDepartamento } }),
            this.prisma.tipodepartamento.findUnique({ where: { IdTipoDepartamento: IdTipoDepartamento } }),
            this.prisma.departamento.findUnique({ where: { NomeDepartamento: NomeDepartamento } }),
        ]);

        if (!findBloco) throw new BadRequestException('O bloco que você está tentando adicionar não existe')
        if (!findTipo) throw new BadRequestException('O tipo de departamento que você está tentando aplicar não existe')
        if (!findSituacao) throw new BadRequestException('A situacao do departamento selecionada não existe')
        if (checkNome) throw new BadRequestException('O departamento cadastrado já existe')

        await this.prisma.departamento.create({
            data: {
                NomeDepartamento: NomeDepartamento,
                blocodepartamento: { connect: { IdBlocoDepartamento: IdBlocoDepartamento } },
                situacaodepartamento: { connect: { IdSituacaoDepartamento: IdSituacaoDepartamento } },
                tipodepartamento: { connect: { IdTipoDepartamento: IdTipoDepartamento } }
            }
        })

        return { message: 'Departamento cadastrado com sucesso' }


    }

    async getDepartments() {
        return await this.prisma.departamento.findMany({
            select: {
                IdDepartamento: true,
                NomeDepartamento: true,
                IdBlocoDepartamento: true,
                IdTipoDepartamento: true,
                IdSituacaoDepartamento: true

            },
            orderBy: {
                IdDepartamento: 'desc'
            }
        })
    }

    async getDepartment(id: string) {
        const findDepartment = await this.prisma.departamento.findUnique({ where: { IdDepartamento: parseInt(id) } })
        if (!findDepartment) throw new NotFoundException;

        return findDepartment;
    }

    async deleteDepartment(id: string) {

        const findDepartment = await this.prisma.departamento.findUnique({ where: { IdDepartamento: parseInt(id) } })
        if (!findDepartment) throw new NotFoundException;

        await this.prisma.departamento.delete({
            where: {
                IdDepartamento: parseInt(id)
            }
        })

        return { message: 'Departamento excluido com suceesso' }
    }

    async updateDepartment(dto: DepartmentUpdateDto, id: string) {
        if (Object.keys(dto).length === 0) {
            throw new BadRequestException('O corpo da requisição não pode estar vazio');
        }

        const { IdBlocoDepartamento, IdSituacaoDepartamento, IdTipoDepartamento, NomeDepartamento } = dto;

        const [findBloco, findTipo, findSituacao, checkNome] = await Promise.all([
            IdBlocoDepartamento ? this.prisma.blocodepartamento.findUnique({ where: { IdBlocoDepartamento: IdBlocoDepartamento } }) : Promise.resolve(undefined),
            IdSituacaoDepartamento ? this.prisma.situacaodepartamento.findUnique({ where: { IdSituacaoDepartamento: IdSituacaoDepartamento } }) : Promise.resolve(undefined),
            IdTipoDepartamento ? this.prisma.tipodepartamento.findUnique({ where: { IdTipoDepartamento: IdTipoDepartamento } }) : Promise.resolve(undefined),
            NomeDepartamento ? this.prisma.departamento.findUnique({ where: { NomeDepartamento: NomeDepartamento } }) : Promise.resolve(undefined),
        ]);
        if (!findBloco) throw new BadRequestException('O bloco que você está tentando adicionar não existe')
        if (!findTipo) throw new BadRequestException('O tipo de departamento que você está tentando aplicar não existe')
        if (!findSituacao) throw new BadRequestException('A situacao do departamento selecionada não existe')
        if (checkNome) throw new BadRequestException('O departamento que você quer adicionar já existe')


        await this.prisma.departamento.update({
            data: {
                NomeDepartamento: NomeDepartamento,
                IdSituacaoDepartamento: IdSituacaoDepartamento,
                IdBlocoDepartamento: IdBlocoDepartamento,
                IdTipoDepartamento: IdTipoDepartamento,
            },
            where: {
                IdDepartamento: parseInt(id)
            }
        })

        return { message: 'Departamento atualizado com sucesso' }


    }



}
