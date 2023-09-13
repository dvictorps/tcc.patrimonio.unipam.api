import { Controller, Post, Get, Body, Req, Res, Param, UseGuards, Patch, Delete, Query } from '@nestjs/common';
import { EquipmentDto } from './dto/equipment.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { EquipmentService } from './equipment.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role, Roles } from 'src/roles/roles.decorator';
import { EquipmentUpdateDto } from './dto/equipment.update.dto';

@Controller('equipment')
export class EquipmentController {
    constructor(private readonly equipmentService: EquipmentService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Post('register')
    registerEquipment(@Body() dto: EquipmentDto) {
        return this.equipmentService.registerEquipment(dto)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get()
    getEquipments(
        @Query('skip') skip: string,
        @Query('take') take: string,
        @Query('searchPatrim') searchPatrim: string,
        @Query('searchDesc') searchDesc: string,
        @Query('searchSerial') searchSerial: string
    ) {

        const skipValue = skip ? parseInt(skip, 10) : 0;
        const takeValue = take ? parseInt(take, 10) : 10;
        const searchPatrimValue = searchPatrim ? searchPatrim : undefined;
        const searchDescValue = searchDesc ? searchDesc : undefined;
        const searchSerialValue = searchSerial ? searchSerial : undefined;

        return this.equipmentService.getEquipments(skipValue, takeValue, searchPatrimValue, searchDescValue, searchSerialValue)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get(':id')
    getEquipment(@Param('id') id: string) {
        return this.equipmentService.getEquipment(id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Delete('delete/:id')
    deleteEquipment(@Param('id') id: string) {
        return this.equipmentService.deleteEquipment(id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Patch('update/:id')
    updateEquipment(@Body() dto: EquipmentUpdateDto, @Param() params: { id: string }) {
        return this.equipmentService.updateEquipment(dto, params.id)
    }

}
