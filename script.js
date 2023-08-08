const categorias = {
    pratoPrincipal: "Prato Principal",
    bebida: "Bebida",
    sobremesa: "Sobremesa",
};

const todasReceitas = [
  {
    name: "Suco de Morango",
    image: "imgs/suco-de-morango.webp",
    ingredients: ["morangos", "açucar",],
    instructions: ["junta tudo e mexe",],
    tips: ["cuida pra n mexer por horas",],
    category: categorias.bebida
},
{
    name: "Pudim de leite condensado",
    image: "imgs/pudim.webp",
    ingredients: ["1 lata de leite condensado", "1 lata de leite (medida da lata de leite condensado)", "3 ovos inteiros", "1 xícara (chá) de açúcar", "1/2 xícara de água"],
    instructions: ["Primeiro, bata bem os ovos no liquidificador.", "Acrescente o leite condensado e o leite, e bata novamente.", "Calda", "Derreta o açúcar na panela até ficar moreno, acrescente a água e deixe engrossar.", "Coloque em uma forma redonda e despeje a massa do pudim por cima.", "Asse em forno médio por 45 minutos, com a assadeira redonda dentro de uma maior com água.", "Espete um garfo para ver se está bem assado.", "Deixe esfriar e desenforme."],
    tips: ["espere esfriar para desenformar",],
    category: categorias.sobremesa
},
{   
    name: "Moscow Mule",
    image: "imgs/moscow.webp",
    ingredients: ["50 ml de vodka", "100 ml de água com gás", "½ colher (sopa) de açúcar", "3 colheres (chá) de xarope de gengibre", "suco de ½ limão", "gelo"],
    instructions: ["Em uma caneca, coloque o gelo e a vodka.", "Adicione o suco de limão, o açúcar e o xarope de gengibre.", "Complete essa mistura com a água com gás e mexa suavemente.", "Se preferir, finalize com uma rodela de limão."],
    tips: ["use pedras de gelo pequenas",],
    category: categorias.bebida
},
{
    name: "Lasanha de carne moída",
    image: "imgs/lasanha.jpeg",
    ingredients: ["500 g de massa de lasanha", "2 caixas de creme de leite", "3 colheres de farinha de trigo", "500 g de mussarela", "2 copos de leite", "3 colheres de óleo", "3 dentes de alho amassados", "500 g de carne moída", "3 colheres de manteiga", "500 g de presunto", "sal a gosto", "1 cebola ralada", "1 caixa de molho de tomate", "1 pacote de queijo ralado"],
    instructions: ["Lasanha", "Cozinhe a massa segundo as orientações do fabricante, despeje em um refratário com água gelada para não grudar e reserve.", "Molho à bolonhesa", "Refogue o alho, a cebola, a carne moída, o molho de tomate, deixe cozinhar por 3 minutos e reserve.", "Molho branco", "Derreta a margarina, coloque as 3 colheres de farinha de trigo e mexa.", "Despeje o leite aos poucos e continue mexendo.", "Por último, coloque o creme de leite, mexa por 1 minuto e desligue o fogo.", "Montagem", "Despeje uma parte do molho à bolonhesa em um refratário, a metade da massa, a metade do presunto, a metade da mussarela, todo o molho branco e o restante da massa.","Repita as camadas até a borda do recipiente.", "Finalize com o queijo ralado e leve ao forno alto (220° C), preaquecido, por cerca de 20 minutos."],
    tips: ["capriche no queijo ralado",],
    category: categorias.pratoPrincipal
},
{
    name: "Brigadeiro",
    image: "imgs/brigadeiro.jpg",
    ingredients: ["1 caixa de leite condensado", "7 colheres (sopa) de achocolatado ou 4 colheres (sopa) de chocolate em pó", "1 colher (sopa) de margarina sem sal", "chocolate granulado"],
    instructions: ["Em uma panela funda, acrescente o leite condensado, a margarina e o chocolate em pó.", "Cozinhe em fogo médio e mexa até que o brigadeiro comece a desgrudar da panela.", "ADeixe esfriar e faça pequenas bolas com a mão passando a massa no chocolate granulado."],
    tips: ["se preferir consuma como brigadeiro de colher",],
    category: categorias.sobremesa
},
{
    name: "Bolinho de bacalhau",
    image: "imgs/bolinho_bacalhau.jpg",
    ingredients: ["300 g de bacalhau dessalgado e desfiado", "1 colher (sopa) de farinha de trigo", "pimenta-do-reino a gosto", "2 colheres (sopa) de cheiro-verde picado", "3 xícara (chá) de batatas cozidas e espremidas","sal a gosto", "3 ovos", "óleo para fritar"],
    instructions: ["Em uma tigela, misture bem todos os ingredientes.", "Com uma colher de sopa, pegue porções de massa, frite em óleo quente até dourar e escorra em papel absorvente."],
    tips: ["Não utilize óleo usado, pois pode deixar o bolinho muito gorduroso",],
    category: categorias.pratoPrincipal
},
{
    name: "Quentão de vinho",
    image: "imgs/quentao.webp",
    ingredients: ["2 l de vinho tinto suave", "Meio copo de cachaça", "2 pauzinhos de canela", "8 rodelinhas de gengibre (ou a gosto)", "1 copo de água 200 ml","1 e 1/2 copo de açúcar", "12 cravos (ou a gosto)"],
    instructions: ["Misture todos os ingredientes ao fogo em uma panela.", "Depois que levantar fervura, deixe por mais 10 minutos.", "Está pronto é só servir."],
    tips: ["Sirva a bebida quente",],
    category: categorias.bebida
},
];

(() => {
    let id = 1;
    todasReceitas.map(i => i.id = id++);
})()
console.log(todasReceitas)

function renderReceitar() { }

function filtroReceitasCategoria(categoria, receitas = todasReceitas) {
    return receitas.filter((e) => e.category === categoria);
}

function filtroReceitasNome(nome, receitas = todasReceitas) {
  return receitas.filter((e) => e.name.includes(nome));
}

// Tela de contato

function msg() {
  document.getElementById("formularioContato").reset();
    return receitas.filter(e => e.name.includes(nome));
}


// Tela de contato

function msg() {
    document.getElementById("formularioContato").reset();
}
function validateForm() {
  // Obtém os valores dos campos
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validação dos campos
  if (name.trim() === "") {
    alert("Por favor, informe o seu nome.");
    return false;
  }

  if (email.trim() === "") {
    alert("Por favor, informe o seu email.");
    return false;
  }

  if (message.trim() === "") {
    alert("Por favor, digite sua mensagem.");
    return false;
  }

  return true;
}

// Event listener para o clique no botão "Enviar mensagem"
document.getElementById("button").addEventListener("click", function (event) {
  if (!validateForm()) {
    event.preventDefault(); // Impede o envio do formulário se a validação falhar
  }
});
