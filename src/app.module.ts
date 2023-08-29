import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { jwtStrategy } from './auth/jwt.strategy';
import { EquipmentModule } from './equipment/equipment.module';
import { CategoryModule } from './category/category.module';
import { CityModule } from './city/city.module';
import { BlockModule } from './block/block.module';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule, EquipmentModule, CategoryModule, CityModule, BlockModule],
  providers: [jwtStrategy]
})
export class AppModule { }