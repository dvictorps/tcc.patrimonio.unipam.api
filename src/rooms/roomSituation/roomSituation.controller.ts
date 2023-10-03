import { Controller, Post, Get, Body, Req, Res, Param, UseGuards, Patch, Delete } from '@nestjs/common';
import { RoomSituationDto } from './dto/roomSituation.dto';
import { JwtAuthGuard } from '../../auth/jwt.guard';
import { RoomSituationService } from './roomSituation.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role, Roles } from 'src/roles/roles.decorator';

@Controller('roomSituation')
export class RoomSituationController {
    constructor(private readonly roomSituationService: RoomSituationService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Post('register')
    registerRoomSituation(@Body() dto: RoomSituationDto) {
        return this.roomSituationService.registerRoomSituation(dto)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get()
    getRoomSituations() {
        return this.roomSituationService.getRoomSituations()
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get(':id')
    getRoomSituation(@Param('id') id: string) {
        return this.roomSituationService.getRoomSituation(id)
    }


    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Delete('delete/:id')
    deleteRoomSituation(@Param('id') id: string) {
        return this.roomSituationService.deleteRoomSituation(id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Patch('update/:id')
    updateRoomSituation(@Body() dto: RoomSituationDto, @Param() params: { id: string }) {
        return this.roomSituationService.updateRoomSituation(dto, params.id)
    }
}
