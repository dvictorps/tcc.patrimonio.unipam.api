import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, IsOptional, isNotEmpty, IsDate } from 'class-validator';

export class SituationDto {

    @IsNotEmpty()
    @IsString()
    public DescricaoSituacaoEquipamento: string;


}   