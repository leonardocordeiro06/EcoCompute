# EcoCompute

Site estático em português brasileiro sobre a infraestrutura e os impactos ambientais da inteligência artificial. Projeto acadêmico para Internet e Sociedade, no curso de Sistemas de Informação.

## Executar localmente

Baixe ou clone o repositório e abra `index.html` em um navegador com JavaScript habilitado. As fotos, os estilos e os scripts são locais. A navegação, o diagrama e a calculadora funcionam sem conexão. Os links das referências abrem páginas externas.

## Estrutura

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Conteúdo, menu, diagrama, formulário e estrutura dos resultados |
| `css/style.css` | Identidade visual, Flexbox, Grid, foco e responsividade |
| `js/dados.js` | Perfis, distribuições, pesos, períodos e textos do diagrama |
| `js/simulacao.js` | Validação, cálculo, comparação e interpretação |
| `js/interface.js` | Eventos, atualização dos resultados e barras |
| `assets/images/` | Fotografias do centro de computação do CERN em WebP |
| `ROTEIRO.md` | Roteiro de apresentação de 15 minutos |
| `.gitignore` | Exclusão de arquivos locais de editores e do sistema |

O HTML fornece a estrutura semântica, o CSS organiza a aparência e o JavaScript atualiza o conteúdo no navegador. O projeto usa HTML, CSS e JavaScript puros.

## Funcionalidades

- Navegação por âncoras entre as seis seções.
- Diagrama clicável com as quatro etapas de uma solicitação.
- Comparação editorial de refrigeração e de infraestrutura empresarial.
- Calculadora com validação de frequência inteira de 1 a 1.000.000, por escolha de interface, e seleção de complexidade e período.
- Comparação com quatro perfis fictícios em barras CSS e texto. A maior barra ocupa a largura disponível e serve de escala para as demais no mesmo resultado.

O índice é o produto da frequência diária, do número de dias e da carga média ponderada. Os pesos são 1, 2 e 4. A escala é didática, sem equivalência física. Por exemplo, 25 interações diárias de complexidade variada durante 30 dias somam 750 interações e 1.500 pontos EcoCompute.

## Publicar no GitHub Pages

1. Crie um repositório público vazio no GitHub, com permissão para enviar o projeto.
2. Na pasta EcoCompute que contém o histórico Git, configure o destino e envie a branch:

   ```sh
   git remote add origin https://github.com/SEU_USUARIO/EcoCompute.git
   git push -u origin main
   ```

   Se já houver um remoto chamado `origin`, confira seu destino com `git remote -v` antes de enviar.
3. No GitHub, abra **Settings > Pages**. Em **Build and deployment**, selecione **Deploy from a branch**, a branch `main` e a pasta `/ (root)`. Clique em **Save**.
4. Aguarde o GitHub indicar a publicação e abra o endereço exibido em **Pages**. Confira o menu, a calculadora e as fotos no endereço público.

[Documentação do GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Referências

- Agência Internacional de Energia. [Energy and AI](https://www.iea.org/reports/energy-and-ai).
- Lawrence Berkeley National Laboratory. [2024 United States Data Center Energy Usage Report](https://escholarship.org/uc/item/32d6m0d1).
- OpenAI. [Infraestrutura do Stargate e data center de Abilene](https://openai.com/index/building-the-compute-infrastructure-for-the-intelligence-age/).
- Google. [Relatório ambiental de 2026](https://sustainability.google/google-2026-environmental-report/) e [instalação de The Dalles](https://www.datacenters.google/locations/oregon/).
- Microsoft. [Projeto de refrigeração](https://www.microsoft.com/en-us/microsoft-cloud/blog/2024/12/09/sustainable-by-design-next-generation-datacenters-consume-zero-water-for-cooling/) e [indicadores de eficiência](https://datacenters.microsoft.com/sustainability/efficiency/).

As informações das empresas mantêm o recorte divulgado em cada fonte. Indicadores corporativos e descrições de instalações servem a perguntas diferentes.

## Créditos das imagens

- `servidores.webp` · Florian Hirzinger, [CERN Server.jpg](https://commons.wikimedia.org/wiki/File:CERN_Server.jpg), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
- `infraestrutura.webp` · Srnec media, [Rack of Worldwide LHC Computing Grid.jpg](https://commons.wikimedia.org/wiki/File:Rack_of_Worldwide_LHC_Computing_Grid.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

As duas imagens foram redimensionadas e convertidas para WebP. Cada versão mantém a licença indicada no crédito.
