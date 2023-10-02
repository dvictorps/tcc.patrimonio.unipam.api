import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, IsOptional, isNotEmpty, IsDate } from 'class-validator';

export class ManufacturerDto {

    @IsNotEmpty()
    @IsString()
    public NomeFabricante: string;


}   