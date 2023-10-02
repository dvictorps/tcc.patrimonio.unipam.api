import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, IsOptional, isNotEmpty, IsDate } from 'class-validator';

export class CompanyUpdateDto {

    @IsOptional()
    @IsString()
    public NomeEmpresa: string;

    @IsOptional()
    @IsString()
    public NomeRepresentante: string;

    @IsOptional()
    @IsString()
    public SiteEmpresa: string;

    @IsOptional()
    @IsEmail()
    public EmailEmpresa: string;

    @IsOptional()
    @IsNumber()
    public TelefoneEmpresa: number;

    @IsOptional()
    @IsNumber()
    public IdCidade: number

}   