function getClientes() {
  return fetch('http://localhost:4000/clientes')
    .then(resposta => {
      return resposta.json();
    })
}
function getCliente(id) {
  return fetch(`http://localhost:4000/clientes/cliente/${id}`)
    .then(resposta => {
      return resposta.json();
    })
}
function addCliente(nome, cpf) {
  const dadoJSON = JSON.stringify({
    nome: nome,
    cpf: cpf
  });
  //Verifica se o cliente já existe na base de dados
  let clienteCadastrado = existeCPF(cpf);
  existeCPF(cpf).then(clienteJaCadastrado => {
    if (!clienteJaCadastrado) {
      return fetch('http://localhost:4000/clientes/cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: dadoJSON
      })
        .then(retorno => {
          return retorno.body;
        });
    } else {
      console.error("Cliente já cadastrado na base de dados");
    }
  });
}
function existeCPF(cpf) {
  return getClientes().then(clientes => {
    return clientes.some(cliente => cliente.cpf == cpf)
  });
}
function deleteCliente(id) {
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: 'DELETE'
  });
}
function updateCliente(id, cpf, nome) {
  const dadoJSON = JSON.stringify({
    nome: nome,
    cpf: cpf
  });
  return fetch(`http://lsocalhost:4000/clientes/cliente/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: dadoJSON
  });
}
function exibeMensagemSucesso(msg) {
  const mensagem = document.createElement('span');
  mensagem.innerHTML = `
    <br/>
    <div class="alert alert-success" role="alert">
      ${msg}
    </div>
  `;
  return mensagem;
}
function exibeMensagemErro(msg) {
  const mensagem = document.createElement('span');
  mensagem.innerHTML = `
    <br/>
    <div class="alert alert-danger" role="alert">
      ${msg}
    </div>
  `;
  return mensagem;
}
