import { Controller, Post, Get, Body, Req, Res, Param, UseGuards, Patch, Delete, Query } from '@nestjs/common';
import { DepartmentDto } from './dto/room.dto';
import { JwtAuthGuard } from '../../auth/jwt.guard';
import { DepartmentService } from './room.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role, Roles } from 'src/roles/roles.decorator';
import { DepartmentUpdateDto } from './dto/room.update.dto';

@Controller('department')
export class DepartmentController {
    constructor(private readonly departmentService: DepartmentService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Post('register')
    registerDepartment(@Body() dto: DepartmentDto) {
        return this.departmentService.registerDepartment(dto)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get()
    getDepartments() {
        return this.departmentService.getDepartments()
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get(':id')
    getDepartment(@Param('id') id: string) {
        return this.departmentService.getDepartment(id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Delete('delete/:id')
    deleteDepartment(@Param('id') id: string) {
        return this.departmentService.deleteDepartment(id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Patch('update/:id')
    updateDepartment(@Body() dto: DepartmentUpdateDto, @Param() params: { id: string }) {
        return this.departmentService.updateDepartment(dto, params.id)
    }

}
