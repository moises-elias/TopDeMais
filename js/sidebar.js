//Barra Lateral
const sidebar = document.getElementById("sidebar");
const navLogin = document.getElementById("login");

function closeSideBar() {
  sidebar.style.width = "0%";
  navLogin.style.opacity = "1";
  setTimeout(() => {
    sidebar.style.visibility = "hidden";
  }, 50);
}

function openSideBar() {
  sidebar.style.visibility = "visible";
  sidebar.style.width = "40%";
  navLogin.style.opacity = "0";
}
