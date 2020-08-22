const form = document.querySelector("[data-form]");
form.addEventListener("submit", event => {
  event.preventDefault();
  const cpf = event.target.querySelector("[data-cpf]");
  const nome = event.target.querySelector("[data-nome]");
  addCliente(nome.value, cpf.value);
  // console.log(existeCPF(cpf.value));
});