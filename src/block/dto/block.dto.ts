import { IsNotEmpty, IsString } from 'class-validator';

export class BlockDto {

    @IsNotEmpty()
    @IsString()
    public DescricaoBlocoDepartamento: string;


}   