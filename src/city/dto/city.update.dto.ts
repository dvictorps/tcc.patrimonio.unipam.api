import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, IsOptional, isNotEmpty, IsDate } from 'class-validator';

export class CityUpdateDto {

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    public NomeCidade: string;

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    public IdEstado: number


}   