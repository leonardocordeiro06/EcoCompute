const botoesEtapas = document.querySelectorAll("[data-etapa]");
for (const botao of botoesEtapas) {
  botao.addEventListener("click", function () {
    for (const item of botoesEtapas) {
      item.setAttribute("aria-pressed", String(item === botao));
    }
    const etapa = etapas[Number(botao.dataset.etapa)];
    document.querySelector("#etapa-titulo").textContent = etapa.titulo;
    document.querySelector("#etapa-texto").textContent = etapa.texto;
  });
}

const listaPerfis = document.querySelector("#lista-perfis");
for (const perfil of perfis) {
  const item = document.createElement("li");
  const nome = document.createElement("strong");
  const detalhes = document.createElement("p");
  const proporcoes = document.createElement("small");
  nome.textContent = perfil.nome;
  detalhes.textContent = perfil.frequencia + " interações/dia. " + perfil.descricao;
  proporcoes.textContent = perfil.proporcoes[0] + "% simples, " + perfil.proporcoes[1]
    + "% moderadas e " + perfil.proporcoes[2] + "% complexas.";
  item.append(nome, detalhes, proporcoes);
  listaPerfis.append(item);
}

const formulario = document.querySelector("#formulario");
const campoFrequencia = document.querySelector("#frequencia");
const campoComplexidade = document.querySelector("#complexidade");
const campoPeriodo = document.querySelector("#periodo");
const erro = document.querySelector("#erro");
const resultado = document.querySelector("#resultado");
const estadoInicial = document.querySelector("#estado-inicial");
const formatador = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 2 });

campoFrequencia.addEventListener("input", function () {
  erro.hidden = true;
  erro.textContent = "";
  campoFrequencia.removeAttribute("aria-invalid");
});

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const mensagem = validarFrequencia(campoFrequencia.value, campoFrequencia.validity.badInput, Number(campoFrequencia.max));
  if (mensagem) {
    erro.hidden = false;
    erro.textContent = mensagem;
    campoFrequencia.setAttribute("aria-invalid", "true");
    resultado.hidden = true;
    estadoInicial.hidden = false;
    campoFrequencia.focus();
    return;
  }

  const frequencia = Number(campoFrequencia.value);
  const complexidade = complexidades[campoComplexidade.value];
  const periodo = periodos[campoPeriodo.value];
  const comparacao = compararPerfis(frequencia, periodo.dias, complexidade.proporcoes);

  document.querySelector("#saida-frequencia").textContent = formatador.format(frequencia);
  document.querySelector("#saida-total").textContent = formatador.format(frequencia * periodo.dias);
  document.querySelector("#saida-complexidade").textContent = complexidade.nome;
  document.querySelector("#saida-indice").textContent = formatador.format(comparacao[0].indice);
  document.querySelector("#grafico-titulo").textContent = periodo.nome + " · " + periodo.dias + " dias · pontos EcoCompute";
  document.querySelector("#interpretacao").textContent = interpretarResultado(comparacao);
  atualizarBarras(comparacao);

  estadoInicial.hidden = true;
  resultado.hidden = false;
  document.querySelector("#resultado-titulo").focus();
});

function atualizarBarras(comparacao) {
  const barras = document.querySelector("#barras");
  barras.replaceChildren();
  let maiorIndice = 0;
  for (const perfil of comparacao) {
    maiorIndice = Math.max(maiorIndice, perfil.indice);
  }

  // A maior barra ocupa toda a trilha. As outras são proporcionais a ela.
  for (const perfil of comparacao) {
    const item = document.createElement("li");
    const legenda = document.createElement("div");
    const nome = document.createElement("span");
    const valor = document.createElement("strong");
    const trilha = document.createElement("div");
    const barra = document.createElement("div");

    legenda.className = "legenda-barra";
    nome.textContent = perfil.nome;
    valor.textContent = formatador.format(perfil.indice);
    trilha.className = "trilha";
    trilha.setAttribute("aria-hidden", "true");
    barra.className = "barra";
    barra.style.width = (perfil.indice / maiorIndice * 100) + "%";

    legenda.append(nome, valor);
    trilha.append(barra);
    item.append(legenda, trilha);
    barras.append(item);
  }
}
