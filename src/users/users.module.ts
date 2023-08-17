import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { jwtStrategy } from 'src/auth/jwt.strategy';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/roles/roles.guard';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';


@Module({
  imports: [JwtModule, PassportModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
