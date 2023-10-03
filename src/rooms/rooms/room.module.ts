import { Module } from '@nestjs/common';
import { DepartmentService } from './room.service';
import { DepartmentController } from './room.controller';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';
import { jwtStrategy } from 'src/auth/jwt.strategy';

@Module({
    imports: [JwtModule, PassportModule],
    controllers: [DepartmentController],
    providers: [DepartmentService]
})
export class DepartmentModule { }
