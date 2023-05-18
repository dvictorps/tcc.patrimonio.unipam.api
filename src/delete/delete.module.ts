import { Module } from '@nestjs/common';
import { DeleteService } from './delete.service';
import { DeleteController } from './delete.controller';

@Module({
  controllers: [DeleteController],
  providers: [DeleteService]
})
export class DeleteModule { }
