import { IsNumber, IsString, IsOptional, IsDate, IsNotEmpty } from 'class-validator';

export class EquipmentUpdateDto {

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    public Patrimonio: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    public DescricaoEquipamento: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    public NumeroSerial: string;

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    public IdEmpresa: number

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    public IdCategoriaEquipamento: number

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    public IdSituacaoEquipamento: number

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    public IdFabricante: number

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    public IdDepartamento: number

    @IsOptional()
    @IsNotEmpty()
    public DataAquisicao: Date

    @IsOptional()
    @IsNotEmpty()
    public VencimentoGarantia: Date

    @IsNotEmpty()
    @IsNumber()
    public IdSala: number
}   