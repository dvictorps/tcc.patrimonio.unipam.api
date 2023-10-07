import { Module } from '@nestjs/common';
import { PersonSituationService } from './personSituation.service';
import { PersonSituationController } from './personSituation.controller';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';
import { jwtStrategy } from 'src/auth/jwt.strategy';

@Module({
    imports: [JwtModule, PassportModule],
    controllers: [PersonSituationController],
    providers: [PersonSituationService]
})
export class PersonSituationModule { }
