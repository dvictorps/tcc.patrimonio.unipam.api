import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PersonTypeService {
    constructor(private prisma: PrismaService) { }

    async getPersonTypes() {

        return await this.prisma.tipopessoa.findMany({})

    }

}
