import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, IsOptional, isNotEmpty, IsDate } from 'class-validator';

export class DepartmentUpdateDto {

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    public NomeDepartamento: string;

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    public IdSituacaoDepartamento: number

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    public IdBlocoDepartamento: number

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    public IdTipoDepartamento: number
}   