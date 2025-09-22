# EcoMercado 🛒
> Es trabalho foi elaborado a partir de uma ideia feita durante um trabalho da faculdade. Consiste em pegar o sistema Javascript feito para o trabalho e utiliza-lo na formação de uma página web, para treinar conhecimentos de HTML, CSS e logicamente o javascript.

## 📚 Aps da Faculdade 
Foi proposto pelo professor de Algoritmos 2, **Manuel Martins Filho**, a formação de uma matriz, a qual armazena nomes de supermercados e os nomes de produtos que seriam encontrados em uma cesta básica(sendo de nossa escolha a quantidade de cada elemento).
foi desenvolvido então uma matriz que armazena:
• nomes de supermercados;
• preços de itens da cesta básica.
E a partir dessa matriz, o programa também gera informações adicionais, como:
• média de preços dos produtos;
• valor total da cesta básica em cada supermercado;
• indicação do melhor custo-benefício (supermercado mais barato).

### Ideia adicional
  Com isso, foi-se elaborado uma pagina web como se fosse um App para rodar este programa de uma forma mais eficiente e dinâmica.

## Funcionalidades do programa:
- Armazena 5 Supermercados, pedindo para o usuário escrever os nomes;
- Pede o usuário escolher entre as opções de alimentos dados;
- Pede para usuário digitar os preços de cada produto escolhido;
- No final, exibe os dados postos e escolhidos, a média de cada produto e o mercado mais em conta;

  ## 📑 Resumo
  #### Funções:
- cadastrarSupermercados(qtd): Recebe a quantidade de supermercados e cria uma lista com os nomes deles, usando prompt() para coleta dos dados.
- cadastrarProdutos(qtd): Recebe a quantidade de produtos e cria uma lista com os nomes desses produtos.
- cadastrarPrecos(supermercados, produtos): Recebe a lista de supermercados e produtos, e coleta os preços de cada produto em cada supermercado, armazenando-os em uma matriz.
- mostrarResultados(supermercados, produtos, precos): Calcula e exibe o total de preços por supermercado e a média de preços por produto, usando a matriz de preços. Também imprime os resultados no console.
- supermercadoMaisBarato(supermercados, somaSuper): Identifica o supermercado com o menor total de preços e imprime o nome e o total da cesta mais barata.

#### Fluxo Principal:
O programa começa coletando dados de supermercados, produtos e preços. Em seguida, ele exibe os totais e médias de preços, e mostra qual supermercado tem o menor preço total para a cesta.

#### Objetivo:
Este código permite ao usuário comparar os preços de uma cesta de produtos em diferentes supermercados e descobrir qual deles oferece o melhor preço.
Em resumo, ele realiza a coleta de dados sobre supermercados, produtos e preços, calcula totais e médias, e identifica o supermercado mais barato.

  ## 🛠 Ferramentas
  - HTML5;
  - CSS3;
  - Javascript;
  - GitHub (repositório e pages);
  - Node.js (Ambiente de execução para JavaScript);

   ## 🌐 Acesso:
    [EcoMercado](https://nic-rocha.github.io/EcoMercado/index.html)
  
