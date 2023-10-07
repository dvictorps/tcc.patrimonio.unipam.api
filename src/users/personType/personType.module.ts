import { Module } from '@nestjs/common';
import { PersonTypeService } from './personType.service';
import { PersonTypeController } from './personType.controller';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';
import { jwtStrategy } from 'src/auth/jwt.strategy';

@Module({
    imports: [JwtModule, PassportModule],
    controllers: [PersonTypeController],
    providers: [PersonTypeService]
})
export class PersonTypeModule { }
