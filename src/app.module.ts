import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { jwtStrategy } from './auth/jwt.strategy';
import { EquipmentModule } from './equipment/equipment/equipment.module';
import { CategoryModule } from './equipment/category/category.module';
import { CityModule } from './city/city.module';
import { BlockModule } from './block/block.module';
import { SituationModule } from './equipment/situation/situation.module';
import { DepTypeModule } from './department/depType/depType.module';
import { DepartmentModule } from './department/department/department.module';
import { ManufacturerModule } from './manufacturer/manufacturer.module';
import { CompanyModule } from './company/company.module';
import { RoomTypeModule } from './rooms/roomType/roomType.module';
import { RoomSituationModule } from './rooms/roomSituation/roomSituation.module';
import { RoomModule } from './rooms/rooms/room.module';
import { StateModule } from './state/state.module';
import { DepartmentSituationModule } from './department/departmentSituation/departmentSituation.module';

@Module({
  imports: [AuthModule, PrismaModule,
    UsersModule, EquipmentModule,
    CategoryModule, CityModule,
    BlockModule, SituationModule,
    DepTypeModule, DepartmentModule,
    ManufacturerModule, CompanyModule,
    RoomTypeModule, RoomSituationModule,
    RoomModule, StateModule, DepartmentSituationModule],
  providers: [jwtStrategy]
})
export class AppModule { }