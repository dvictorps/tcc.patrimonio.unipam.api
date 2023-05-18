import { Module } from '@nestjs/common';
import { UpdateService } from './update.service';
import { UpdateController } from './update.controller';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';
import { jwtStrategy } from 'src/auth/jwt.strategy';

@Module({
    imports: [JwtModule, PassportModule],
    controllers: [UpdateController],
    providers: [UpdateService]
})
export class UpdateModule { }
