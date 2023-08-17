import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, IsOptional, isNotEmpty, IsDate } from 'class-validator';

export class EquipmentDto {

    @IsNotEmpty()
    @IsString()
    public Patrimonio: string;

    @IsNotEmpty()
    @IsString()
    public DescricaoEquipamento: string;

    @IsNotEmpty()
    @IsString()
    public NumeroSerial: string;

    @IsNotEmpty()
    @IsNumber()
    public IdEmpresa: number

    @IsNotEmpty()
    @IsNumber()
    public IdCategoriaEquipamento: number

    @IsNotEmpty()
    @IsNumber()
    public IdSituacaoEquipamento: number

    @IsNotEmpty()
    @IsNumber()
    public IdFabricante: number

    @IsNotEmpty()
    @IsNumber()
    public IdDepartamento: number

    @IsNotEmpty()
    @IsDate()
    public DataAquisicao: Date

    @IsNotEmpty()
    @IsDate()
    public VencimentoGarantia: Date
}   