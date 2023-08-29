import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, IsOptional, isNotEmpty, IsDate } from 'class-validator';

export class CityDto {

    @IsNotEmpty()
    @IsString()
    public NomeCidade: string;

    @IsNotEmpty()
    @IsNumber()
    public IdEstado: number


}   