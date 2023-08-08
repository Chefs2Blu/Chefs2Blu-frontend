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

//const categoriasContainer = document.querySelector("receita-categoria");
const receitasContainer = document.getElementById("receitas-container");
const overlay = document.querySelector("section.overlay");
let categoriaSelecionada = "";
let filtroNome = "";

//********************** Card de Receitas ****************************/
function renderReceitas() {
    let receitasAMostrar = todasReceitas;
    receitasContainer.innerHTML = "";

    if (categoriaSelecionada) receitasAMostrar = filtroReceitasCategoria(categoriaSelecionada, receitasAMostrar);
    if (filtroNome) receitasAMostrar = filtroReceitasNome(filtroNome, receitasAMostrar);

    receitasAMostrar.forEach(e => receitasContainer.innerHTML += `
        <div class="card-group">
            <div class="col">
                <div class="card h-100 zoomable-img text card-receita" onclick="showReceitaById(${e.id})">
                    <img src="${e.image}" alt="${e.name}" class="card-img-top">
                    <div class="card-body">
                        <button class="btn btn-receitas">${e.name}</button>
                    </div>    
                </div>
            </div>
        </div>
         
    `)
}

function filtroReceitasCategoria(categoria, receitas = todasReceitas) {
    return receitas.filter((e) => e.category === categoria);
}

function filtroReceitasNome(nome, receitas = todasReceitas) {
    return receitas.filter(e => e.name.includes(nome));
}

function setCategoria(categoria) {
    categoriaSelecionada = categoria;
    renderReceitas();
}

// function setNomeReceita(inputElement) {
//     // filtroNome = nome;
//     console.log(inputElement)
//     renderReceitas();
// }

function showReceitaById(id) {
    const receita = overlay.querySelector('.receita');
    const receitaSelecionada = todasReceitas.find(e => e.id === id)
    receita.innerHTML = `
        <span onclick="escondeReceita()">&laquo Voltar</span>
        <h1>${receitaSelecionada.name}</h1>
        <div class="receita-imagem-container">
            <img src="${receitaSelecionada.image}" alt="${receitaSelecionada.name}">
        </div>
        <div class="receita-ingredientes">
            <h2>Ingredientes</h2>
            <ul>
                ${receitaSelecionada.ingredients.map(e => `<li>${e}</li>`).join('')}
            </ul>
        </div>
        ${receitaSelecionada.tips.length > 0 ? `
            <div class="receita-dicas">
                <h2>Dicas</h2>
                <ol>
                    ${receitaSelecionada.tips.map(e => `<li>${e}</li>`).join('')}
                </ol>
            </div>`
            : ""
        }
        <div class="receita-passos">
            <h2>Passos</h2>
            <ol>
                ${receitaSelecionada.instructions.map((e, i) => `<li>${i + 1} - ${e}</li>`).join('')}
            </ol>
        </div>
    `;
    overlay.classList.remove('hide');
}

function escondeReceita() {
    overlay.classList.add('hide')
}

renderReceitas();

