import { IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {

    @IsNotEmpty()
    public Senha: string;

    @IsNotEmpty()
    public Usuario: string;

}   