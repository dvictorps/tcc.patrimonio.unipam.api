import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';
import { jwtStrategy } from 'src/auth/jwt.strategy';
import { DepartmentSituationService } from './departmentSituation.service';
import { DepartmentSituationController } from './departmentSituation.controller';

@Module({
    imports: [JwtModule, PassportModule],
    controllers: [DepartmentSituationController],
    providers: [DepartmentSituationService]
})
export class DepartmentSituationModule { }
