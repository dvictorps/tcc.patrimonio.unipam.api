import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, IsOptional, isNotEmpty, IsDate } from 'class-validator';

export class RoomTypeDto {

    @IsNotEmpty()
    @IsString()
    public DescricaoTipoSala: string;


}   