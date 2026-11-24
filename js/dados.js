// As proporções seguem a ordem simples, moderada e complexa.
const pesos = [1, 2, 4];

const complexidades = {
  simples: { nome: "Simples", proporcoes: [80, 15, 5] },
  variada: { nome: "Variada", proporcoes: [40, 40, 20] },
  complexa: { nome: "Complexa", proporcoes: [15, 35, 50] }
};

const periodos = {
  semana: { nome: "Semana", dias: 7 },
  mes: { nome: "Mês", dias: 30 },
  ano: { nome: "Ano", dias: 365 }
};

const perfis = [
  { nome: "O estudante", frequencia: 15, descricao: "Estudos, dúvidas, resumos e revisão de textos.", proporcoes: [50, 35, 15] },
  { nome: "O profissional", frequencia: 35, descricao: "E-mails, documentos e produtividade.", proporcoes: [40, 40, 20] },
  { nome: "O desenvolvedor", frequencia: 60, descricao: "Programação, depuração e problemas técnicos.", proporcoes: [20, 40, 40] },
  { nome: "O usuário intensivo", frequencia: 100, descricao: "Uso frequente e tarefas diversificadas.", proporcoes: [20, 35, 45] }
];

const etapas = [
  {
    titulo: "A solicitação sai do seu dispositivo",
    texto: "Ao enviar uma pergunta a um serviço de IA on-line, seu dispositivo transmite os dados pela internet a um data center, uma instalação que reúne servidores, equipamentos de rede, alimentação elétrica e refrigeração."
  },
  {
    titulo: "Os servidores processam a pergunta",
    texto: "Os servidores executam o modelo para produzir a resposta. GPUs são processadores capazes de executar muitos cálculos em paralelo. Elas e outros aceleradores de IA ajudam a realizar as operações matemáticas do modelo."
  },
  {
    titulo: "A infraestrutura usa eletricidade",
    texto: "Processadores, memória e equipamentos de rede precisam de energia elétrica. A instalação também usa eletricidade para manter serviços de apoio, como ventiladores, bombas e compressores, conforme o sistema de refrigeração."
  },
  {
    titulo: "O calor precisa sair da instalação",
    texto: "Quando os componentes eletrônicos operam, parte da energia elétrica é dissipada como calor. A refrigeração remove esse calor para manter os equipamentos dentro de uma faixa segura de temperatura e evitar falhas."
  }
];
