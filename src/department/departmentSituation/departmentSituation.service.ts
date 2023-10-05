import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';


@Injectable()
export class DepartmentSituationService {
    constructor(private prisma: PrismaService) { }

    async getDepartmentSituations() {
        return await this.prisma.situacaodepartamento.findMany({
            orderBy: { IdSituacaoDepartamento: 'desc' }
        })
    }

}
