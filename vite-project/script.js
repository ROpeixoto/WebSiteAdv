function calcular() {
  const antes = parseFloat(document.getElementById("antes").value);
  const anos = parseInt(document.getElementById("anos").value);
  const depois = parseFloat(document.getElementById("depois").value);

  if (
    isNaN(antes) || isNaN(anos) || isNaN(depois) ||
    antes <= 0 || anos <= 0 || depois <= 0
  ) {
    document.getElementById("resultado-final").classList.remove('oculto');
    document.getElementById("anos-resultado").textContent = '';
    document.getElementById("valor-resultado").textContent = '';

    document.getElementById("depois-resultado").textContent = '';

    document.getElementById("diferenca-acumulado").textContent = '';
    return;
  }

  // Cálculo do valor acumulado crescente (1.2 ao ano)
  let valorAno = antes;
  let totalCorreto = 0;
  for (let i = 0; i < anos; i++) {
    totalCorreto += valorAno * 12;
    if (i < anos - 1) valorAno *= 1.08;
  }

  // Cálculo do valor acumulado decrescente (0.9 ao ano)
  let valorDecrescente = depois;
  let totalDecrescente = 0;
  for (let i = 0; i < anos; i++) {
    totalDecrescente += valorDecrescente * 12;
    if (i < anos - 1) valorDecrescente *= 0.95;
  }

  // Diferença entre os acumulados
  const diferenca = totalDecrescente - totalCorreto;

  // Esconde o formulário
  document.getElementById("formulario").style.display = "none";

  // Mostra a div de resultado e preenche os campos
  document.getElementById("resultado-final").classList.remove('oculto');
  document.getElementById("anos-resultado").textContent = anos;
  document.getElementById("valor-resultado").textContent = `R$ ${valorAno.toFixed(2)}`;
  document.getElementById("depois-resultado").textContent = `R$ ${depois.toFixed(2)}`;
  document.getElementById("diferenca-acumulado").textContent = `R$ ${diferenca.toFixed(2)}`;
}