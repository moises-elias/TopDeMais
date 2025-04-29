const header = document.querySelector("header"); // Seleciona o cabeçalho

// Função para verificar se o cabeçalho deve ser escondido
function shouldHideHeader() {
  const scrollTop = window.scrollY; // Pega a posição do scroll
  const scrollSizeY = document.documentElement.scrollHeight; // Tamanho total da página
  return scrollTop > scrollSizeY * 0.05; // Retorna true se o scroll estiver além de 5% da página
}

// Função para atualizar a visibilidade do cabeçalho
function updateHeaderVisibility() {
  if (shouldHideHeader()) {
    header.classList.add("headerClose"); // Se o scroll for maior que 5%, esconde o cabeçalho
  } else {
    header.classList.remove("headerClose"); // Caso contrário, exibe o cabeçalho
  }
}

window.addEventListener("scroll", updateHeaderVisibility); // Atualiza a visibilidade toda vez que o scroll mudar
updateHeaderVisibility(); // Verifica a visibilidade do cabeçalho logo após o carregamento da página

// Mouse Hover do cabeçalho
header.addEventListener("mouseover", function () {
  header.classList.remove("headerClose"); // Mostra o cabeçalho quando o mouse passar por cima
});

header.addEventListener("mouseout", function () {
  if (shouldHideHeader()) {
    header.classList.add("headerClose"); // Esconde o cabeçalho quando o mouse sair, se necessário
  }
});
