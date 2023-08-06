const categorias = {
  pratoPrincipal: "Prato Principal",
  bebida: "Bebida",
  sobremesa: "Sobremesa",
};

const todasReceitas = [
    {
        id: 1,
        name: "suco de morango",
        image: "https://www.dicasdemulher.com.br/wp-content/uploads/2021/08/suco-de-morango-00.jpeg",
        ingredients: ["morangos", "açucar",],
        instructions: ["junta tudo e mexe",],
        tips: ["cuida pra n mexer por horas",],
        category: categorias.bebida
    },
    {
        id: 2,
        name: "Pudim de leite condensado",
        image: "https://static.itdg.com.br/images/640-400/59e079217cc8af8291a8cb910d1d449f/318825-original.jpg",
        ingredients: ["1 lata de leite condensado", "1 lata de leite (medida da lata de leite condensado)", "3 ovos inteiros", "1 xícara (chá) de açúcar", "1/2 xícara de água"],
        instructions: ["Pudim", "Primeiro, bata bem os ovos no liquidificador.", "Acrescente o leite condensado e o leite, e bata novamente.", "Calda", "Derreta o açúcar na panela até ficar moreno, acrescente a água e deixe engrossar.", "Coloque em uma forma redonda e despeje a massa do pudim por cima.", "Asse em forno médio por 45 minutos, com a assadeira redonda dentro de uma maior com água.", "Espete um garfo para ver se está bem assado.", "Deixe esfriar e desenforme."],
        tips: ["cuida pra n mexer por horas",],
        category: categorias.sobremesa
    },

];

function renderReceitar() {}

function filtroReceitasCategoria(categoria, receitas = todasReceitas) {
  return receitas.filter((e) => e.category === categoria);
}

function filtroReceitasNome(nome, receitas = todasReceitas) {
  return receitas.filter((e) => e.name.includes(nome));
}
// Tela de contato

function msg() {
  document.getElementById("formularioContato").reset();
}

const receitasContainer = document.getElementById("receitas-container");

    todasReceitas.forEach(receita => {
        const receitaDiv = document.createElement("div");
        receitaDiv.classList.add("receita-item");

        const receitaImg = document.createElement("img");
        receitaImg.src = receita.image;
        receitaImg.alt = receita.name;
        receitaImg.width = 200;

        const receitaBtn = document.createElement("button");
        receitaBtn.classList.add("btn", "btn-secondary");
        receitaBtn.textContent = receita.name;

        receitaDiv.appendChild(receitaImg);
        receitaDiv.appendChild(receitaBtn);

        receitasContainer.appendChild(receitaDiv);
    });
