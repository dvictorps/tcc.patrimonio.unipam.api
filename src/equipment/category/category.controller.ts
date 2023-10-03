import { Controller, Post, Get, Body, Req, Res, Param, UseGuards, Patch, Delete } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { JwtAuthGuard } from '../../auth/jwt.guard';
import { CategoryService } from './category.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role, Roles } from 'src/roles/roles.decorator';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Post('register')
    registerCategory(@Body() dto: CategoryDto) {
        return this.categoryService.registerCategory(dto)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get()
    getCategorys() {
        return this.categoryService.getCategorys()
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Get(':id')
    getCategory(@Param('id') id: string) {
        return this.categoryService.getCategory(id)
    }


    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Delete('delete/:id')
    deleteCategory(@Param('id') id: string) {
        return this.categoryService.deleteCategory(id)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Protected)
    @Patch('update/:id')
    updateCategory(@Body() dto: CategoryDto, @Param() params: { id: string }) {
        return this.categoryService.updateCategory(dto, params.id)
    }
}
