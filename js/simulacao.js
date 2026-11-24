function validarFrequencia(valor, entradaInvalida, limite) {
  if (entradaInvalida) {
    return "Digite um número inteiro de interações por dia.";
  }
  if (valor.trim() === "") {
    return "Informe quantas interações você faz por dia.";
  }
  const frequencia = Number(valor);
  if (!Number.isInteger(frequencia) || frequencia < 1) {
    return "Informe um número inteiro maior que zero.";
  }
  if (frequencia > limite) {
    return "O limite é de 1.000.000 de interações por dia.";
  }
  return "";
}

function calcularIndice(frequencia, dias, proporcoes) {
  let somaPonderada = 0;
  for (let i = 0; i < pesos.length; i++) {
    somaPonderada += proporcoes[i] * pesos[i];
  }
  // As proporções são percentuais inteiros. Dividir ao final evita arredondar a carga média.
  return frequencia * dias * somaPonderada / 100;
}

function compararPerfis(frequencia, dias, proporcoes) {
  const comparacao = [
    { nome: "Seu perfil", indice: calcularIndice(frequencia, dias, proporcoes) }
  ];
  for (const perfil of perfis) {
    comparacao.push({
      nome: perfil.nome,
      indice: calcularIndice(perfil.frequencia, dias, perfil.proporcoes)
    });
  }
  return comparacao;
}

function interpretarResultado(comparacao) {
  const indiceUsuario = comparacao[0].indice;
  let abaixo = 0;
  let iguais = 0;
  for (let i = 1; i < comparacao.length; i++) {
    if (comparacao[i].indice < indiceUsuario) {
      abaixo++;
    } else if (comparacao[i].indice === indiceUsuario) {
      iguais++;
    }
  }
  if (abaixo === 4) {
    return "Seu índice ficou acima dos quatro perfis de referência neste período.";
  }
  if (abaixo === 0 && iguais === 0) {
    return "Seu índice ficou abaixo dos quatro perfis de referência neste período.";
  }
  if (iguais > 0) {
    return "Seu índice foi igual ao de " + iguais + " dos quatro perfis de referência neste período.";
  }
  return "Seu índice ficou acima de " + abaixo + " dos quatro perfis de referência neste período.";
}
