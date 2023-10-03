import { Module } from '@nestjs/common';
import { RoomTypeService } from './roomType.service';
import { RoomTypeController } from './roomType.controller';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';
import { jwtStrategy } from 'src/auth/jwt.strategy';

@Module({
    imports: [JwtModule, PassportModule],
    controllers: [RoomTypeController],
    providers: [RoomTypeService]
})
export class RoomTypeModule { }
