import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';


@Injectable()
export class StateService {
    constructor(private prisma: PrismaService) { }

    async getStates() {
        return await this.prisma.estado.findMany({
            orderBy: {
                IdEstado: 'desc'
            }
        })
    }

}
