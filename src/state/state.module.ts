import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';
import { jwtStrategy } from 'src/auth/jwt.strategy';
import { StateService } from './state.service';
import { StateController } from './state.controller';

@Module({
    imports: [JwtModule, PassportModule],
    controllers: [StateController],
    providers: [StateService]
})
export class StateModule { }
