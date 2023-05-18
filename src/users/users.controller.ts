import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RolesGuard } from 'src/roles/roles.guard';
import { UsersService } from './users.service';
import { Roles, Role } from 'src/roles/roles.decorator';

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
}