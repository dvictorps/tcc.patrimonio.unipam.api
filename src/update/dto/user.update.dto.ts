import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, IsOptional } from 'class-validator';

export class UpdateUserDto {

    @IsOptional()
    @IsEmail()
    public Email: string;

    @IsOptional()
    @IsString()
    @Length(3, 20, { message: 'A senha precisa ter entre 3 a 20 caracteres' })
    public Senha: string;

    @IsOptional()
    @IsString()
    public Usuario: string;

    @IsOptional()
    @IsNumber()
    public IdTipoPessoa: number

    @IsOptional()
    @IsNumber()
    public IdSituacaoPessoa: number

    @IsOptional()
    @IsString()
    public Nome: string
}   