import { Module } from '@nestjs/common';
import { ManufacturerService } from './manufacturer.service';
import { ManufacturerController } from './manufacturer.controller';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';
import { jwtStrategy } from 'src/auth/jwt.strategy';

@Module({
    imports: [JwtModule, PassportModule],
    controllers: [ManufacturerController],
    providers: [ManufacturerService]
})
export class ManufacturerModule { }
