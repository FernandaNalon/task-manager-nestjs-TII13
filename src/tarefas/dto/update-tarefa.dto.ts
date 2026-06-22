import { IsOptional, IsString } from "class-validator";

export class UpdateTarefaDto {
    @IsOptional()
    @IsString()
    titulo: string;

    @IsOptional()
    @IsString()
    descricao: string;

    @IsOptional()
    @IsString()
    status: string;
}