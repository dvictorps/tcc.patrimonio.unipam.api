import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, IsOptional, isNotEmpty, IsDate } from 'class-validator';

export class CompanyDto {

    @IsNotEmpty()
    @IsString()
    public NomeEmpresa: string;

    @IsNotEmpty()
    @IsString()
    public NomeRepresentante: string;

    @IsNotEmpty()
    @IsString()
    public SiteEmpresa: string;

    @IsNotEmpty()
    @IsEmail()
    public EmailEmpresa: string;

    @IsNotEmpty()
    @IsNumber()
    public TelefoneEmpresa: number;

    @IsNotEmpty()
    @IsNumber()
    public IdCidade: number

}   