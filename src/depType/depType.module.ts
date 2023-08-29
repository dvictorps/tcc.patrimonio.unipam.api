import { Module } from '@nestjs/common';
import { BlockService } from './depType.service';
import { BlockController } from './depType.controller';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';
import { jwtStrategy } from 'src/auth/jwt.strategy';

@Module({
    imports: [JwtModule, PassportModule],
    controllers: [BlockController],
    providers: [BlockService]
})
export class BlockModule { }
