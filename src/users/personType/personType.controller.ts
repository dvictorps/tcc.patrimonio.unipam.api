import { Controller, Post, Get, Body, Req, Res, Param, UseGuards, Patch, Delete } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt.guard';
import { PersonTypeService } from './personType.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role, Roles } from 'src/roles/roles.decorator';

@Controller('personType')
export class PersonTypeController {
    constructor(private readonly personTypeService: PersonTypeService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get()
    getPersonTypes() {
        return this.personTypeService.getPersonTypes()
    }
}
