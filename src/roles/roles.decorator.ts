import { SetMetadata } from '@nestjs/common';

export enum Role {

    Admin = 1,
    Usuario = 2,
    Tecnico = 3

}

export const Roles = (...args: Role[]) => SetMetadata('roles', args);
