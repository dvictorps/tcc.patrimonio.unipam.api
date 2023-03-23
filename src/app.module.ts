import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { UpdateModule } from './update/update.module';
import { DeleteModule } from './delete/delete.module';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule, UpdateModule, DeleteModule],
})
export class AppModule { }