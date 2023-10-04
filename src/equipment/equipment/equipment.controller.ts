import { Controller, Post, Get, Body, Req, Res, Param, UseGuards, Patch, Delete, Query } from '@nestjs/common';
import { EquipmentDto } from './dto/equipment.dto';
import { JwtAuthGuard } from '../../auth/jwt.guard';
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
        @Query('searchSerial') searchSerial: string,
        @Query('company') company: string,
        @Query('category') category: string,
        @Query('situation') situation: string,
        @Query('manufacturer') manufacturer: string,
        @Query('department') department: string
    ) {

        const skipValue = skip ? parseInt(skip, 10) : 0;
        const takeValue = take ? parseInt(take, 10) : 10;
        const searchPatrimValue = searchPatrim ? searchPatrim : undefined;
        const searchDescValue = searchDesc ? searchDesc : undefined;
        const searchSerialValue = searchSerial ? searchSerial : undefined;
        const companyValue = company ? company : undefined;
        const categoryValue = category ? category : undefined;
        const situationValue = situation ? situation : undefined;
        const manufacturerValue = manufacturer ? manufacturer : undefined;
        const departmentValue = department ? department : undefined;

        return this.equipmentService.getEquipments(skipValue, takeValue, searchPatrimValue, searchDescValue, searchSerialValue,
            companyValue, categoryValue, situationValue, manufacturerValue, departmentValue)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get(':id')
    getEquipment(@Param('id') id: string) {
        return this.equipmentService.getEquipment(id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Patch('disable/:id')
    disableEquipment(@Param('id') id: string) {
        return this.equipmentService.disableEquipment(id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Patch('disable')
    disableEquipments(@Query('equipments') equipments: string[],) {
        return this.equipmentService.disableEquipments(equipments)
    }


    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Patch('update/:id')
    updateEquipment(@Body() dto: EquipmentUpdateDto, @Param() params: { id: string }) {
        return this.equipmentService.updateEquipment(dto, params.id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Patch('enable/:id')
    enableEquipment(@Param('id') id: string) {
        return this.equipmentService.enableEquipment(id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Patch('enable')
    enableEquipments(@Query('equipments') equipments: string[],) {
        return this.equipmentService.enableEquipments(equipments)
    }



}
