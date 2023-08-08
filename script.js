const categorias = {
    pratoPrincipal: "Prato Principal",
    bebida: "Bebida",
    sobremesa: "Sobremesa",
};

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
