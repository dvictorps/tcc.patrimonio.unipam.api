import { Controller, Patch, Param, Body, Delete } from '@nestjs/common';
import { Req, Res, UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { Role, Roles } from 'src/roles/roles.decorator';
import { RolesGuard } from 'src/roles/roles.guard';
import { DeleteService } from './delete.service';

@Controller('delete')
export class DeleteController {
  constructor(private readonly deleteService: DeleteService) { }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Protected)
  @Delete('user/:id')
  deleteUser(@Param() params: { id: string }, @Req() req, @Res() res) {
    const decodedUser = req.user as { id: number, user: string, role: number }
    if (decodedUser.role !== Role.Admin) res.clearCookie('token');
    res.status(200).send("Usuário excluído com sucesso");
    return this.deleteService.deleteUser(params.id)
  }

}