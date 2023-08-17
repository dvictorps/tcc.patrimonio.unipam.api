import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { jwtStrategy } from './auth/jwt.strategy';
import { EquipmentModule } from './equipment/equipment.module';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule, EquipmentModule],
  providers: [jwtStrategy]
})
export class AppModule { }