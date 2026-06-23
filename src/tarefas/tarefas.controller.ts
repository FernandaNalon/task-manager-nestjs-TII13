import { Controller, Body, Post, Get, ParseIntPipe, Param, Put, Delete } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { TarefasService } from './tarefas.service';

@Controller('tarefas')
export class TarefasController {
    constructor(private readonly tarefasService:TarefasService){}

    @Post()
    criar(@Body() createTarefaDto:CreateTarefaDto){
        return this.tarefasService.criar(createTarefaDto);
    }

    @Get()
    listar() {
        return this.tarefasService.listar();
    }

    @Get(':id')
    buscarPorId(@Param('id', ParseIntPipe) id: number){
        return this.tarefasService.buscarPorId(id);
    }

    @Put(':id')
    atualizar(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateTarefaDto:UpdateTarefaDto
    ) {
        return this.tarefasService.atualizar(id, updateTarefaDto);
    }

    @Delete(':id')
    remover(@Param('id', ParseIntPipe) id: number){
        return this.tarefasService.remover(id);
    }
}
