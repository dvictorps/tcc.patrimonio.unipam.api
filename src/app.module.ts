import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { jwtStrategy } from './auth/jwt.strategy';
import { EquipmentModule } from './equipment/equipment.module';
import { CategoryModule } from './category/category.module';
import { CityModule } from './city/city.module';
import { BlockModule } from './block/block.module';
import { SituationModule } from './situation/situation.module';
import { DepTypeModule } from './depType/depType.module';
import { DepartmentModule } from './department/department.module';
import { ManufacturerModule } from './manufacturer/manufacturer.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule, EquipmentModule, CategoryModule, CityModule, BlockModule, SituationModule, DepTypeModule, DepartmentModule, ManufacturerModule, CompanyModule],
  providers: [jwtStrategy]
})
export class AppModule { }