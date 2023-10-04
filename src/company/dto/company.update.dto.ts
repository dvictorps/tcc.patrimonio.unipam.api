import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, IsOptional, isNotEmpty, IsDate } from 'class-validator';

export class CompanyUpdateDto {

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    public NomeEmpresa: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    public NomeRepresentante: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    public SiteEmpresa: string;

    @IsOptional()
    @IsNotEmpty()
    @IsEmail()
    public EmailEmpresa: string;

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    public TelefoneEmpresa: number;

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    public IdCidade: number

}   