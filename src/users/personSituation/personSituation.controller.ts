import { Controller, Post, Get, Body, Req, Res, Param, UseGuards, Patch, Delete } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt.guard';
import { PersonSituationService } from './personSituation.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role, Roles } from 'src/roles/roles.decorator';

@Controller('personSituation')
export class PersonSituationController {
    constructor(private readonly personSituationService: PersonSituationService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get()
    getPersonSituations() {
        return this.personSituationService.getPersonSituations()
    }
}
