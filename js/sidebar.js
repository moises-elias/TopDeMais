//Barra Lateral
const sidebar = document.getElementById("sidebar");
const navLogin = document.getElementById("login");

function closeSideBar() {
  sidebar.style.width = "0%";
  navLogin.style.visibility = "visible";
}

function openSideBar() {
  sidebar.style.width = "40%";
  navLogin.style.visibility = "hidden";
}
