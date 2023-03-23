import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { UsersService } from './users.service';
import { ForbiddenException } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getMyUser(@Param() params: { id: string }, @Req() req) {
    const decodedUser = req.user as { id: number, user: string, role: number }
    if (decodedUser.role !== 1) throw new ForbiddenException()
    return this.usersService.getMyUser(params.id)
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers()
  }
}
