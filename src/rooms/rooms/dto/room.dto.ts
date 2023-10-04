import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, IsOptional, isNotEmpty, IsDate } from 'class-validator';

export class RoomDto {

    @IsNotEmpty()
    @IsString()
    public DescricaoSala: string;

    @IsNotEmpty()
    @IsNumber()
    public IdBlocoDepartamento: number

    @IsNotEmpty()
    @IsNumber()
    public IdSituacaoSala: number

    @IsNotEmpty()
    @IsNumber()
    public IdTipoSala: number
}   