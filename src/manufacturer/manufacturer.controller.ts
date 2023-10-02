import { Controller, Post, Get, Body, Req, Res, Param, UseGuards, Patch, Delete } from '@nestjs/common';
import { ManufacturerDto } from './dto/manufacturer.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { ManufacturerService } from './manufacturer.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role, Roles } from 'src/roles/roles.decorator';

@Controller('manufacturer')
export class ManufacturerController {
    constructor(private readonly manufacturerService: ManufacturerService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Post('register')
    registerManufacturer(@Body() dto: ManufacturerDto) {
        return this.manufacturerService.registerManufacturer(dto)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get()
    getManufacturers() {
        return this.manufacturerService.getManufacturers()
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get(':id')
    getManufacturer(@Param('id') id: string) {
        return this.manufacturerService.getManufacturer(id)
    }


    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Delete('delete/:id')
    deleteManufacturer(@Param('id') id: string) {
        return this.manufacturerService.deleteManufacturer(id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Patch('update/:id')
    updateManufacturer(@Body() dto: ManufacturerDto, @Param() params: { id: string }) {
        return this.manufacturerService.updateManufacturer(dto, params.id)
    }
}
