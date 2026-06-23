// Chama a nossa API
const API_URL = 'http://localhost:3000/tarefas';

async function listarTarefasApi(){
    const resposta = await fetch(API_URL);
    return resposta.json()
}

async function criarTarefaApi(tarefa){
    await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarefa)
    });
}

async function atualizarStatusApi(id, status) {
    await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            status:status
        })
    });
}

async function removerTeraApi(id) {
    await fetch (`${API_URL}/${id}`, {
        method: 'DELETE'
    });
}