import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, IsOptional, isNotEmpty, IsDate } from 'class-validator';

export class CityUpdateDto {

    @IsOptional()
    @IsString()
    public NomeCidade: string;

    @IsOptional()
    @IsNumber()
    public IdEstado: number


}   