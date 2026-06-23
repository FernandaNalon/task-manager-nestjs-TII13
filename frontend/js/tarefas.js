// Controla a interface

const form = document.getElementById('formTarefa');
const listarTarefas = document.getElementById('listarTarefas');

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const status = document.getElementById('status').value;

    await criarTarefaApi({
        titulo: titulo,
        descricao: descricao,
        status:status
    });
    form.reset();
    carregarTarefas();
})

async function carregarTarefas() {
    const tarefas = await listarTarefasApi();
    listarTarefas.innerHTML = '';

    tarefas.forEach(function(tarefa) {
        const card = document.createElement('div');
        card.className = 'tarefa';

        card.innerHTML = `
            <h3>${tarefa.titulo}</h3>
            <p>${tarefa.descricao}</p>
            <strong>Status: </strong>${tarefa.status}
            <div class="acoes">
                <p>Atualizar Status:</p>
                <select id="status-${tarefa.id}">
                    <option value="pendente" ${tarefa.status === 'pendente' ? 'selected' : ''}>Pendente</option>
                    <option value="em andamento" ${tarefa.status === 'em andamento' ? 'selected' : ''}>Em andamento</option>
                    <option value="concluida" ${tarefa.status === 'concluida' ? 'selected' : ''}>Concluida</option>
                </select>
                <button onclick="atualizarStatus(${tarefa.id})">Atualizar</button>
                <button onclick="removerTarefa(${tarefa.id})">Excluir</button>
            </div>
        `;
        listarTarefas.appendChild(card);
    });
}

async function atualizarStatus(id) {
    const status = document.getElementById(`status-${id}`).value;
    await atualizarStatusApi(id, status);
    carregarTarefas();
}

async function removerTarefa(id) {
    await removerTarefaApi(id);
    carregarTarefas();
}
carregarTarefas();