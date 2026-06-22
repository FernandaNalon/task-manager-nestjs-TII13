import { Injectable } from '@nestjs/common';
import { connection } from '../database/database';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { RowDataPacket } from 'mysql2'; 
import { Tarefa } from './interfaces/tarefa.interface';

@Injectable()
export class TarefasService {

    async listar() {
        const [tarefa] = await connection.query('SELECT * FROM tarefa ORDER BY id DESC');
        return tarefa;
    }

    async criar(createTarefaDto:CreateTarefaDto) {
        const { titulo, descricao, status} = createTarefaDto;
        await connection.query(
        'INSERT INTO tarefa (titulo, descricao, status) VALUES (?,?,?)',
        [titulo, descricao || '', status || 'pendente'],
        );
        return {
            mensagem: 'Tarefa criada com sucesso!'
        };
    }

}
