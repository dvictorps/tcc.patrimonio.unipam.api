import { IsEmail, IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class RegisterDto {
    @IsEmail()
    public Email: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 20, { message: 'A senha precisa ter entre 3 a 20 caracteres' })
    public Senha: string;

    @IsNotEmpty()
    @IsString()
    public Usuario: string;


    @IsNumber()
    public IdTipoPessoa: number


    @IsNumber()
    public IdSituacaoPessoa: number


    @IsString()
    public Nome: string
}   