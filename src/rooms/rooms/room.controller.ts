import { Controller, Post, Get, Body, Req, Res, Param, UseGuards, Patch, Delete, Query } from '@nestjs/common';
import { RoomDto } from './dto/room.dto';
import { JwtAuthGuard } from '../../auth/jwt.guard';
import { RoomService } from './room.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role, Roles } from 'src/roles/roles.decorator';
import { RoomUpdateDto } from './dto/room.update.dto';

@Controller('room')
export class RoomController {
    constructor(private readonly roomService: RoomService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Post('register')
    registerRoom(@Body() dto: RoomDto) {
        return this.roomService.registerRoom(dto)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get()
    getRooms() {
        return this.roomService.getRooms()
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get(':id')
    getRoom(@Param('id') id: string) {
        return this.roomService.getRoom(id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Delete('delete/:id')
    deleteRoom(@Param('id') id: string) {
        return this.roomService.deleteRoom(id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Patch('update/:id')
    updateRoom(@Body() dto: RoomUpdateDto, @Param() params: { id: string }) {
        return this.roomService.updateRoom(dto, params.id)
    }

}
