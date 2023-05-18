import { SetMetadata } from '@nestjs/common';

export enum Role {
    Admin = 1,
    Public = 2,
    Protected = 3
}

export const Roles = (...args: Role[]) => SetMetadata('roles', args);
