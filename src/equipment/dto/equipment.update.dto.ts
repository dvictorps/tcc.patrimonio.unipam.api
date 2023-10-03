import { IsNumber, IsString, IsOptional, IsDate } from 'class-validator';

export class EquipmentUpdateDto {

    @IsOptional()
    @IsString()
    public Patrimonio: string;

    @IsOptional()
    @IsString()
    public DescricaoEquipamento: string;

    @IsOptional()
    @IsString()
    public NumeroSerial: string;

    @IsOptional()
    @IsNumber()
    public IdEmpresa: number

    @IsOptional()
    @IsNumber()
    public IdCategoriaEquipamento: number

    @IsOptional()
    @IsNumber()
    public IdSituacaoEquipamento: number

    @IsOptional()
    @IsNumber()
    public IdFabricante: number

    @IsOptional()
    @IsNumber()
    public IdDepartamento: number

    @IsOptional()
    public DataAquisicao: Date

    @IsOptional()
    public VencimentoGarantia: Date
}   