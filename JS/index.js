const quadrado = document.getElementById("quadrado");
const pergunta = document.getElementById("pergunta");
const entrada = document.getElementById("entrada");
const botao = document.getElementById("btnEnviar");
const opcoesDiv = document.getElementById("opcoes");
const resposta = document.getElementById("resposta");

// Função para input de texto (supermercados e preços)
function customPrompt(mensagem) {
  return new Promise((resolve) => {
    pergunta.innerText = mensagem;
    entrada.style.display = "block";
    botao.style.display = "inline-block";
    opcoesDiv.style.display = "none";
    entrada.value = "";
    entrada.focus();

    botao.onclick = () => {
      if (entrada.value.trim() !== "") {
        quadrado.style.display = "none";
        resolve(entrada.value);
      } else {
        alert("Digite algo!");
      }
    };

    quadrado.style.display = "flex";
  });
}

// Função para escolha entre opções (produtos)
function escolherOpcao(mensagem, opcoes) {
  return new Promise((resolve) => {
    pergunta.innerText = mensagem;
    entrada.style.display = "none";
    botao.style.display = "none";
    opcoesDiv.style.display = "flex";
    opcoesDiv.innerHTML = "";

    opcoes.forEach((opcao) => {
      const btn = document.createElement("button");
      btn.innerText = opcao;
      btn.onclick = () => {
        resolve(opcao);
        quadrado.style.display = "none";
      };
      opcoesDiv.appendChild(btn);
    });

    quadrado.style.display = "flex";
  });
}

// Cadastro de supermercados
async function cadastrarSupermercados(qtd) {
  let supermercados = [];
  for (let i = 0; i < qtd; i++) {
    const nome = await customPrompt("Digite o nome do supermercado " + (i + 1) + ":");
    supermercados.push(nome);
  }
  return supermercados;
}

// Cadastro de produtos escolhidos entre opções
const opcoesProdutos = ["Arroz", "Feijão", "banana", "Leite", "Ovos", "Pão", "Manteiga", "batata", "café", "carne", "óleo", "açúcar", "tomate", "farinha de trigo"];
async function cadastrarProdutos(qtd = 5) {
  let produtos = [];
  let disponiveis = [...opcoesProdutos];
  for (let i = 1; i <= qtd; i++) {
    const escolha = await escolherOpcao(`Escolha o produto ${i} de ${qtd}:`, disponiveis);
    produtos.push(escolha);
    disponiveis = disponiveis.filter(p => p !== escolha); // remove opção escolhida
  }
  return produtos;
}

// Cadastro de preços
async function cadastrarPrecos(supermercados, produtos) {
  let precos = [];
  for (let i = 0; i < supermercados.length; i++) {
    precos[i] = [];
    await customPrompt("Agora digite os preços para: " + supermercados[i]);

    for (let j = 0; j < produtos.length; j++) {
      let valor = Number(await customPrompt(`Preço do ${produtos[j]} no ${supermercados[i]}:`));
      precos[i][j] = valor;
    }
  }
  return precos;
}

// Mostrar resultados
function mostrarResultados(supermercados, produtos, precos, somaSuper) {
  entrada.style.display = "none";
  botao.style.display = "none";
  opcoesDiv.style.display = "none";

  let resultadoHTML = "<h2>Resultados da pesquisa</h2>";

  for (let i = 0; i < supermercados.length; i++) {
    resultadoHTML += `<h3>${supermercados[i]}</h3>`;
    let soma = 0;
    for (let j = 0; j < produtos.length; j++) {
      soma += precos[i][j];
      resultadoHTML += `${produtos[j]}: R$ ${precos[i][j].toFixed(2)}<br>`;
    }
    resultadoHTML += `<b>Total:</b> R$ ${soma.toFixed(2)}<hr>`;
  }

  resultadoHTML += "<h3>Média por produto</h3>";
  for (let j = 0; j < produtos.length; j++) {
    let soma = 0;
    for (let i = 0; i < supermercados.length; i++) soma += precos[i][j];
    resultadoHTML += `${produtos[j]}: R$ ${(soma / supermercados.length).toFixed(2)}<br>`;
  }

  let menor = somaSuper[0];
  let idx = 0;
  for (let i = 1; i < somaSuper.length; i++) {
    if (somaSuper[i] < menor) {
      menor = somaSuper[i];
      idx = i;
    }
  }
  resultadoHTML += `<h2>Mais barato: ${supermercados[idx]} - R$ ${menor.toFixed(2)}</h2>`;

  pergunta.innerHTML = resultadoHTML;
  resposta.innerHTML = resultadoHTML;
  quadrado.style.display = "flex";
}

// Main
async function main() {
  let supermercados = await cadastrarSupermercados(4);
  let produtos = await cadastrarProdutos(5);
  let precos = await cadastrarPrecos(supermercados, produtos);

  let somaSuper = supermercados.map((_, i) => precos[i].reduce((a, b) => a + b, 0));

  mostrarResultados(supermercados, produtos, precos, somaSuper);
}

main();
