import { Controller, Post, Get, Body, Req, Res, Param, UseGuards, Patch, Delete } from '@nestjs/common';
import { CityDto } from './dto/city.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { CityService } from './city.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role, Roles } from 'src/roles/roles.decorator';
import { CityUpdateDto } from './dto/city.update.dto';

@Controller('city')
export class CityController {
    constructor(private readonly cityService: CityService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Post('register')
    registerCity(@Body() dto: CityDto) {
        return this.cityService.registerCity(dto)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get()
    getCities() {
        return this.cityService.getCities()
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get(':id')
    getCity(@Param('id') id: string) {
        return this.cityService.getCity(id)
    }


    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Delete('delete/:id')
    deleteCity(@Param('id') id: string) {
        return this.cityService.deleteCity(id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Patch('update/:id')
    updateCity(@Body() dto: CityUpdateDto, @Param() params: { id: string }) {
        return this.cityService.updateCity(dto, params.id)
    }
}
