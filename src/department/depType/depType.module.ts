import { Module } from '@nestjs/common';
import { DepTypeService } from './depType.service';
import { DepTypeController } from './depType.controller';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';
import { jwtStrategy } from 'src/auth/jwt.strategy';

@Module({
    imports: [JwtModule, PassportModule],
    controllers: [DepTypeController],
    providers: [DepTypeService]
})
export class DepTypeModule { }
