import { Body, Controller, Delete, Get, Param, Patch, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RolesGuard } from 'src/roles/roles.guard';
import { UsersService } from './users.service';
import { Roles, Role } from 'src/roles/roles.decorator';
import { UpdateUserDto } from './dto/user.update.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Protected)
  @Get(':id')
  getMyUser(@Param('id') id: string) {
    return this.usersService.getMyUser(id);
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Protected)
  @Patch('update/:id')
  updateUser(@Body() dto: UpdateUserDto, @Param() params: { id: string }) {
    return this.usersService.updateUser(dto, params.id)
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Protected)
  @Delete('delete/:id')
  deleteUser(@Param() params: { id: string }, @Req() req, @Res() res) {
    const decodedUser = req.user as { id: number, user: string, role: number }
    if (decodedUser.role !== Role.Admin) res.clearCookie('token');
    res.status(200).send("Usuário excluído com sucesso");
    return this.usersService.deleteUser(params.id)
  }

}