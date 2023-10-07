import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PersonSituationService {
    constructor(private prisma: PrismaService) { }

    async getPersonSituations() {

        return await this.prisma.situacaopessoa.findMany({})

    }

}
