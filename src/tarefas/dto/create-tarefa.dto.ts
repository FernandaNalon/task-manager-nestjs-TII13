import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTarefaDto {
    @IsNotEmpty()
    @IsString()
    titulo: string;

    @IsString()
    @IsOptional()
    descricao: string;

    @IsString()
    @IsOptional()
    status: string;
}