const id = new URL(window.location).searchParams.get('id');

const cpfField = document.querySelector('[data-cpf]');
const nomeField = document.querySelector('[data-nome]');

const cliente = getCliente(id).then(retorno => {
  cpfField.value = retorno[0].cpf;
  nomeField.value = retorno[0].nome;
});

const formulario = document.querySelector('[data-form]');
formulario.addEventListener('submit', event => {
  event.preventDefault();
  updateCliente(id, cpfField.value, nomeField.value)
    .then(resp => {
      if (resp.status == 200) {
        formulario.appendChild(exibeMensagemSucesso("Cliente atualizado com sucesso."));
      }
    }).catch(() => {
      formulario.appendChild(exibeMensagemErro("Erro atualizando dados do cliente."));
    });
});
