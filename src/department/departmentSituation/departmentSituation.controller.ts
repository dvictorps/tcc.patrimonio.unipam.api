import { Controller, Post, Get, Body, Req, Res, Param, UseGuards, Patch, Delete } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt.guard';
import { DepartmentSituationService } from './departmentSituation.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role, Roles } from 'src/roles/roles.decorator';

@Controller('departmentSituations')
export class DepartmentSituationController {
    constructor(private readonly departmentSituationService: DepartmentSituationService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get()
    getDepartmentSituations() {
        return this.departmentSituationService.getDepartmentSituations()
    }
}
