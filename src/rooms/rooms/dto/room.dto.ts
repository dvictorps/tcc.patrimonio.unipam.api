import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, IsOptional, isNotEmpty, IsDate } from 'class-validator';

export class DepartmentDto {

    @IsNotEmpty()
    @IsString()
    public NomeDepartamento: string;

    @IsNotEmpty()
    @IsNumber()
    public IdSituacaoDepartamento: number

    @IsNotEmpty()
    @IsNumber()
    public IdBlocoDepartamento: number

    @IsNotEmpty()
    @IsNumber()
    public IdTipoDepartamento: number
}   