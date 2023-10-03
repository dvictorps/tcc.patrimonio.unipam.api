import { Controller, Post, Get, Body, Req, Res, Param, UseGuards, Patch, Delete } from '@nestjs/common';
import { DepartamentDto } from './dto/depType.dto';
import { JwtAuthGuard } from '../../auth/jwt.guard';
import { DepTypeService } from './depType.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role, Roles } from 'src/roles/roles.decorator';

@Controller('depType')
export class DepTypeController {
    constructor(private readonly depTypeService: DepTypeService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Post('register')
    registerDepType(@Body() dto: DepartamentDto) {
        return this.depTypeService.registerDepType(dto)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get()
    getDepTypes() {
        return this.depTypeService.getDepTypes()
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get(':id')
    getDepType(@Param('id') id: string) {
        return this.depTypeService.getDepType(id)
    }


    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Delete('delete/:id')
    deleteDepType(@Param('id') id: string) {
        return this.depTypeService.deleteDepType(id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Patch('update/:id')
    updateDepType(@Body() dto: DepartamentDto, @Param() params: { id: string }) {
        return this.depTypeService.updateDepType(dto, params.id)
    }
}
