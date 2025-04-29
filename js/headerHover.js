const header = document.querySelector("header"); // Seleciona o cabeçalho
const buttonsNav = document.querySelectorAll(".nav a"); // Seleciona os botões do cabeçalho

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

function showHeader() {
  header.classList.remove("headerClose"); // Mostra o cabeçalho quando o mouse passar por cima
}
// Mouse Hover do cabeçalho
header.addEventListener("mouseover", showHeader);

function hideHeader() {
  if (shouldHideHeader()) {
    header.classList.add("headerClose"); // Esconde o cabeçalho quando o mouse sair, se necessário
  }
}

// Mouse Out do cabeçalho
header.addEventListener("mouseout", hideHeader);

// Fecha o cabeçalho ao clicar nos botões
buttonsNav.forEach(button => {
  button.addEventListener("click", () => {
    // Desativa o hover do cabeçalho
    header.removeEventListener("mouseover", showHeader);
    hideHeader();

    // Ativa o hover do cabeçalho depois de 0.8s
    setTimeout(() => {
      header.addEventListener("mouseover", showHeader);
    }, 800);
    hideHeader();
  });
});
