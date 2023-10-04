import { Controller, Post, Get, Body, Req, Res, Param, UseGuards, Patch, Delete } from '@nestjs/common';
import { RoomTypeDto } from './dto/roomType.dto';
import { JwtAuthGuard } from '../../auth/jwt.guard';
import { RoomTypeService } from './roomType.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role, Roles } from 'src/roles/roles.decorator';

@Controller('roomType')
export class RoomTypeController {
    constructor(private readonly roomTypeService: RoomTypeService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Post('register')
    registerRoomType(@Body() dto: RoomTypeDto) {
        return this.roomTypeService.registerRoomType(dto)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get()
    getRoomTypes() {
        return this.roomTypeService.getRoomTypes()
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get(':id')
    getRoomType(@Param('id') id: string) {
        return this.roomTypeService.getRoomType(id)
    }


    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Delete('delete/:id')
    deleteRoomType(@Param('id') id: string) {
        return this.roomTypeService.deleteRoomType(id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Patch('update/:id')
    updateRoomType(@Body() dto: RoomTypeDto, @Param() params: { id: string }) {
        return this.roomTypeService.updateRoomType(dto, params.id)
    }
}
