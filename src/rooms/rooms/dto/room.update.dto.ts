import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, IsOptional, isNotEmpty, IsDate } from 'class-validator';

export class RoomUpdateDto {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    public DescricaoSala: string;

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    public IdBlocoDepartamento: number

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    public IdSituacaoSala: number

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    public IdTipoSala: number
}   