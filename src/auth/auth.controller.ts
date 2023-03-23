import { Controller, Post, Get, Body, Req, Res, Param, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  signup(@Body() dto: RegisterDto) {
    return this.authService.signup(dto)
  }

  @Post('signin')
  signin(@Body() dto: AuthDto, @Req() req, @Res() res) {
    return this.authService.signin(dto, req, res)
  }

  @Get('signout')
  signout(@Req() req, @Res() res) {
    return this.authService.signout(req, res)
  }
}
