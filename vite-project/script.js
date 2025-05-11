function calcular() {
  const antes = parseFloat(document.getElementById("antes").value);
  const anos = parseInt(document.getElementById("anos").value);

  if (isNaN(antes) || isNaN(anos) || antes <= 0 || anos <= 0) {
    document.getElementById("resultado-final").classList.remove('oculto');
    document.getElementById("anos-resultado").textContent = '';
    document.getElementById("valor-resultado").textContent = '';
    document.getElementById("mensagem-extra").textContent = 'Preencha todos os campos corretamente.';
    return;
  }

  let resultado = antes;
  for (let i = 0; i < anos; i++) {
    resultado *= 1.2;
  }

  // Esconde o formulário
  document.getElementById("formulario").style.display = "none";

  // Mostra a div de resultado e preenche os campos
  document.getElementById("resultado-final").classList.remove('oculto');
  document.getElementById("anos-resultado").textContent = anos;
  document.getElementById("valor-resultado").textContent = `R$ ${resultado.toFixed(2)}`;
  document.getElementById("mensagem-extra").textContent = 'Você está sendo enganado!';
}