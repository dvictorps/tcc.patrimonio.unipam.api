import { IsNotEmpty, IsString } from 'class-validator';

export class DepartamentDto {

    @IsNotEmpty()
    @IsString()
    public TipoDepartamento: string;


}   