import { Module } from '@nestjs/common';
import { SituationService } from './situation.service';
import { SituationController } from './situation.controller';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';
import { jwtStrategy } from 'src/auth/jwt.strategy';

@Module({
    imports: [JwtModule, PassportModule],
    controllers: [SituationController],
    providers: [SituationService]
})
export class SituationModule { }
