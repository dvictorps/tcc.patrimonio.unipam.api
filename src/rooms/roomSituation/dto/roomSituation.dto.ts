import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, IsOptional, isNotEmpty, IsDate } from 'class-validator';

export class RoomSituationDto {

    @IsNotEmpty()
    @IsString()
    public DescricaoSituacaoSala: string;


}   