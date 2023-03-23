import { Controller, Post, Get, Body, Req, Res, Param, UseGuards, Patch } from '@nestjs/common';
import { UpdateUserDto } from './dto/user.update.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { UpdateService } from './update.service';

@Controller('update')
export class UpdateController {
    constructor(private readonly authService: UpdateService) { }

    @UseGuards(JwtAuthGuard)
    @Patch('user/:id')
    updateUser(@Body() dto: UpdateUserDto, @Param() params: { id: string }, @Req() req) {
        return this.authService.updateUser(dto, params.id, req)
    }

}
