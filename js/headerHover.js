//Cabeçalho interativo
const header = document.querySelector("header"); //Cabeçalho
const scrollSizeY = document.documentElement.scrollTop; //Seleciona o Tamanho Vertical do scroll
let scrollTop = 0;

window.addEventListener("scroll", function () {
  scrollTop = window.scrollY; // Localização na tela.

  if (scrollTop > scrollSizeY * 0.05) {
    //Verifica se está no topo da tela
    //Se não estiver no topo ele esconde.
    header.classList.add("headerClose");
  } else {
    //Se Estiver no topo ele deixa mostrando fixamente.
    header.classList.remove("headerClose");
  }
});

//Mouse Hover do cabeçalho:

header.addEventListener("mouseover", function () {
  //Mostra o cabeçalho caso passe o mouse por cima.
  header.classList.remove("headerClose");
});
header.addEventListener("mouseout", function () {
  //Esconde o cabeçalho quando tira o mouse de cima dele.
  if (scrollTop > scrollSizeY * 0.05) {
    header.classList.add("headerClose");
  }
});
