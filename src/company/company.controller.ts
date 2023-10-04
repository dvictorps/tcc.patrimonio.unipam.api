import { Controller, Post, Get, Body, Req, Res, Param, UseGuards, Patch, Delete, Query } from '@nestjs/common';
import { CompanyDto } from './dto/company.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { CompanyService } from './company.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role, Roles } from 'src/roles/roles.decorator';
import { CompanyUpdateDto } from './dto/company.update.dto';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Post('register')
    registerCompany(@Body() dto: CompanyDto) {
        return this.companyService.registerCompany(dto)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get()
    getCompanys() {
        return this.companyService.getCompanys()
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get(':id')
    getCompany(@Param('id') id: string) {
        return this.companyService.getCompany(id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Delete('delete/:id')
    deleteCompany(@Param('id') id: string) {
        return this.companyService.deleteCompany(id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Patch('update/:id')
    updateCompany(@Body() dto: CompanyUpdateDto, @Param() params: { id: string }) {
        return this.companyService.updateCompany(dto, params.id)
    }

}
