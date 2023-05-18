import { Controller, Post, Get, Body, Req, Res, Param, UseGuards, Patch } from '@nestjs/common';
import { UpdateUserDto } from './dto/user.update.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { UpdateService } from './update.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role, Roles } from 'src/roles/roles.decorator';

@Controller('update')
export class UpdateController {
    constructor(private readonly updateService: UpdateService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Patch('user/:id')
    updateUser(@Body() dto: UpdateUserDto, @Param() params: { id: string }) {
        return this.updateService.updateUser(dto, params.id)
    }

}
