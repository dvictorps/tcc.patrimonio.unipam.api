import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, IsOptional, isNotEmpty, IsDate } from 'class-validator';

export class DepartmentUpdateDto {

    @IsOptional()
    @IsString()
    public NomeDepartamento: string;

    @IsOptional()
    @IsNumber()
    public IdSituacaoDepartamento: number

    @IsOptional()
    @IsNumber()
    public IdBlocoDepartamento: number

    @IsOptional()
    @IsNumber()
    public IdTipoDepartamento: number
}   