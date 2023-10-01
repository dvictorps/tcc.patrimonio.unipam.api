import { Controller, Post, Get, Body, Req, Res, Param, UseGuards, Patch, Delete } from '@nestjs/common';
import { SituationDto } from './dto/situation.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { SituationService } from './situation.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role, Roles } from 'src/roles/roles.decorator';

@Controller('situation')
export class SituationController {
    constructor(private readonly situationService: SituationService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Post('register')
    registerSituation(@Body() dto: SituationDto) {
        return this.situationService.registerSituation(dto)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get()
    getSituations() {
        return this.situationService.getSituations()
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get(':id')
    getSituation(@Param('id') id: string) {
        return this.situationService.getSituation(id)
    }


    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Delete('delete/:id')
    deleteSituation(@Param('id') id: string) {
        return this.situationService.deleteSituation(id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Patch('update/:id')
    updateSituation(@Body() dto: SituationDto, @Param() params: { id: string }) {
        return this.situationService.updateSituation(dto, params.id)
    }
}
