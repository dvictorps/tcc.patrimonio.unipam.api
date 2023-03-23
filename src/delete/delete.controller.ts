import { Controller, Patch, Param, Body, Delete } from '@nestjs/common';
import { DeleteService } from './delete.service';

@Controller('delete')
export class DeleteController {
  constructor(private readonly deleteService: DeleteService) { }

  @Delete('user/:id')
  deleteUser(@Param() params: { id: string }) {
    return this.deleteService.deleteUser(params.id)
  }

}
