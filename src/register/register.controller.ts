import { Controller, Post, Get, Body, Req, Res, Param, UseGuards, Patch } from '@nestjs/common';
import { EquipmentDto } from './dto/equipment.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RegisterService } from './register.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role, Roles } from 'src/roles/roles.decorator';

@Controller('register')
export class RegisterController {
    constructor(private readonly registerService: RegisterService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Post('equipment')
    registerEquipment(@Body() dto: EquipmentDto) {
        return this.registerService.registerEquipment(dto)
    }

}
