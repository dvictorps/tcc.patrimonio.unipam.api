import { Module } from '@nestjs/common';
import { RoomSituationService } from './roomSituation.service';
import { RoomSituationController } from './roomSituation.controller';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';
import { jwtStrategy } from 'src/auth/jwt.strategy';

@Module({
    imports: [JwtModule, PassportModule],
    controllers: [RoomSituationController],
    providers: [RoomSituationService]
})
export class RoomSituationModule { }
