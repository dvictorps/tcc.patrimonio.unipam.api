import { Controller, Post, Get, Body, Req, Res, Param, UseGuards, Patch, Delete } from '@nestjs/common';
import { BlockDto } from './dto/block.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { BlockService } from './block.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role, Roles } from 'src/roles/roles.decorator';

@Controller('block')
export class BlockController {
    constructor(private readonly blockService: BlockService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Post('register')
    registerBlock(@Body() dto: BlockDto) {
        return this.blockService.registerBlock(dto)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get()
    getBlocks() {
        return this.blockService.getBlocks()
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get(':id')
    getBlock(@Param('id') id: string) {
        return this.blockService.getBlock(id)
    }


    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Delete('delete/:id')
    deleteBlock(@Param('id') id: string) {
        return this.blockService.deleteBlock(id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Patch('update/:id')
    updateBlock(@Body() dto: BlockDto, @Param() params: { id: string }) {
        return this.blockService.updateBlock(dto, params.id)
    }
}
