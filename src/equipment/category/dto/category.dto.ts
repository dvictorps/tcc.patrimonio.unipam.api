import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, IsOptional, isNotEmpty, IsDate } from 'class-validator';

export class CategoryDto {

    @IsNotEmpty()
    @IsString()
    public DescricaoCategoriaEquipamento: string;


}   