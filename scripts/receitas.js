const categorias = {
    pratoPrincipal: "Prato Principal",
    bebida: "Bebida",
    sobremesa: "Sobremesa",
};

const todasReceitas = [
    {
        name: "suco de morango",
        image: "https://www.dicasdemulher.com.br/wp-content/uploads/2021/08/suco-de-morango-00.jpeg",
        ingredients: ["morangos", "açucar",],
        instructions: ["junta tudo e mexe",],
        tips: ["cuida pra n mexer por horas",],
        category: categorias.bebida
    },
    {
        name: "Pudim de leite condensado",
        image: "https://static.itdg.com.br/images/640-400/59e079217cc8af8291a8cb910d1d449f/318825-original.jpg",
        ingredients: ["1 lata de leite condensado", "1 lata de leite (medida da lata de leite condensado)", "3 ovos inteiros", "1 xícara (chá) de açúcar", "1/2 xícara de água"],
        instructions: ["Pudim", "Primeiro, bata bem os ovos no liquidificador.", "Acrescente o leite condensado e o leite, e bata novamente.", "Calda", "Derreta o açúcar na panela até ficar moreno, acrescente a água e deixe engrossar.", "Coloque em uma forma redonda e despeje a massa do pudim por cima.", "Asse em forno médio por 45 minutos, com a assadeira redonda dentro de uma maior com água.", "Espete um garfo para ver se está bem assado.", "Deixe esfriar e desenforme."],
        tips: ["cuida pra n mexer por horas",],
        category: categorias.sobremesa
    },
    {
        name: "Pudim de leite condensado prato",
        image: "https://static.itdg.com.br/images/640-400/59e079217cc8af8291a8cb910d1d449f/318825-original.jpg",
        ingredients: ["1 lata de leite condensado", "1 lata de leite (medida da lata de leite condensado)", "3 ovos inteiros", "1 xícara (chá) de açúcar", "1/2 xícara de água"],
        instructions: ["Pudim", "Primeiro, bata bem os ovos no liquidificador.", "Acrescente o leite condensado e o leite, e bata novamente.", "Calda", "Derreta o açúcar na panela até ficar moreno, acrescente a água e deixe engrossar.", "Coloque em uma forma redonda e despeje a massa do pudim por cima.", "Asse em forno médio por 45 minutos, com a assadeira redonda dentro de uma maior com água.", "Espete um garfo para ver se está bem assado.", "Deixe esfriar e desenforme."],
        tips: ["cuida pra n mexer por horas",],
        category: categorias.pratoPrincipal
    },
    {
        name: "Pudim de leite condensado",
        image: "https://static.itdg.com.br/images/640-400/59e079217cc8af8291a8cb910d1d449f/318825-original.jpg",
        ingredients: ["1 lata de leite condensado", "1 lata de leite (medida da lata de leite condensado)", "3 ovos inteiros", "1 xícara (chá) de açúcar", "1/2 xícara de água"],
        instructions: ["Pudim", "Primeiro, bata bem os ovos no liquidificador.", "Acrescente o leite condensado e o leite, e bata novamente.", "Calda", "Derreta o açúcar na panela até ficar moreno, acrescente a água e deixe engrossar.", "Coloque em uma forma redonda e despeje a massa do pudim por cima.", "Asse em forno médio por 45 minutos, com a assadeira redonda dentro de uma maior com água.", "Espete um garfo para ver se está bem assado.", "Deixe esfriar e desenforme."],
        tips: ["cuida pra n mexer por horas",],
        category: categorias.sobremesa
    },
    {
        name: "Pudim de leite condensado",
        image: "https://static.itdg.com.br/images/640-400/59e079217cc8af8291a8cb910d1d449f/318825-original.jpg",
        ingredients: ["1 lata de leite condensado", "1 lata de leite (medida da lata de leite condensado)", "3 ovos inteiros", "1 xícara (chá) de açúcar", "1/2 xícara de água"],
        instructions: ["Pudim", "Primeiro, bata bem os ovos no liquidificador.", "Acrescente o leite condensado e o leite, e bata novamente.", "Calda", "Derreta o açúcar na panela até ficar moreno, acrescente a água e deixe engrossar.", "Coloque em uma forma redonda e despeje a massa do pudim por cima.", "Asse em forno médio por 45 minutos, com a assadeira redonda dentro de uma maior com água.", "Espete um garfo para ver se está bem assado.", "Deixe esfriar e desenforme."],
        tips: ["cuida pra n mexer por horas",],
        category: categorias.sobremesa
    },
    {
        name: "Pudim de leite condensado",
        image: "https://static.itdg.com.br/images/640-400/59e079217cc8af8291a8cb910d1d449f/318825-original.jpg",
        ingredients: ["1 lata de leite condensado", "1 lata de leite (medida da lata de leite condensado)", "3 ovos inteiros", "1 xícara (chá) de açúcar", "1/2 xícara de água"],
        instructions: ["Pudim", "Primeiro, bata bem os ovos no liquidificador.", "Acrescente o leite condensado e o leite, e bata novamente.", "Calda", "Derreta o açúcar na panela até ficar moreno, acrescente a água e deixe engrossar.", "Coloque em uma forma redonda e despeje a massa do pudim por cima.", "Asse em forno médio por 45 minutos, com a assadeira redonda dentro de uma maior com água.", "Espete um garfo para ver se está bem assado.", "Deixe esfriar e desenforme."],
        tips: ["cuida pra n mexer por horas",],
        category: categorias.sobremesa
    },
];

(() => {
    let id = 1;
    todasReceitas.map(i => i.id = id++);
})()

const categoriasContainer = document.querySelector("receita-categoria");
const receitasContainer = document.getElementById("receitas-container");
const overlay = document.querySelector("section.overlay");
let categoriaSelecionada = "";
let filtroNome = "";

function renderReceitas() {
    let receitasAMostrar = todasReceitas;
    receitasContainer.innerHTML = "";

    if (categoriaSelecionada) receitasAMostrar = filtroReceitasCategoria(categoriaSelecionada, receitasAMostrar);
    if (filtroNome) receitasAMostrar = filtroReceitasNome(filtroNome, receitasAMostrar);

    receitasAMostrar.forEach(e => receitasContainer.innerHTML += `
        <div class="receita-item" onclick="showReceitaById(${e.id})">
            <img src="${e.image}" alt="${e.name}" width="200">
            <button class="btn btn-secondary">${e.name}</button>
        </div>
    `)



    // receitasAMostrar.forEach(receita => {
    //     const receitaDiv = document.createElement("div");
    //     receitaDiv.classList.add("receita-item");

    //     const receitaImg = document.createElement("img");
    //     receitaImg.src = receita.image;
    //     receitaImg.alt = receita.name;
    //     receitaImg.width = 200;

    //     const receitaBtn = document.createElement("button");
    //     receitaBtn.classList.add("btn", "btn-secondary");
    //     receitaBtn.textContent = receita.name;

    //     receitaDiv.appendChild(receitaImg);
    //     receitaDiv.appendChild(receitaBtn);

    //     receitasContainer.appendChild(receitaDiv);
    // });
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

