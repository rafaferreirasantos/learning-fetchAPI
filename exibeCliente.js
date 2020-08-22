const tablebody = document.querySelector("[data-table-content]");
getClientes().then(dados => {
  dados.forEach(cliente => {
    tablebody.appendChild(criaLinhaCliente(cliente));
  });
})
function removeClienteListener(id) {
  console.log("idCliente:", id);
  if (confirm("Deseja excluir este cliente?")) {
    deleteCliente(id)
      .then(resp => {
        document.location.reload();
      })
  }
}
function updateClienteListener(id) {
  console.log(getCliente(id));
}
function criaLinhaCliente(cliente) {
  let linha = document.createElement("tr");
  linha.innerHTML = `
      <td>${cliente.cpf}</td>
      <td>${cliente.nome}</td>
      <td>
        <a href="./edita-clientes.html?id=${cliente.id}"><img width="18" height="18" class="delete-icon" src="./img/lapis.svg" alt="delete"/></a>
        <img onclick="removeClienteListener(${cliente.id})" width="20" height="20" class="delete-icon" src="./img/lixo.svg" alt="delete"/>
      </td>
      <td></td>`
  return linha;
}
