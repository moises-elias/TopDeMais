const buttonReturnToTop = document.querySelector(".returnToTop");

function returnToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function updateReturnToTopVisibility() {
  if (shouldHideHeader()) {
    buttonReturnToTop.style.display = "block";
  } else {
    buttonReturnToTop.style.display = "none";
  }
}

window.addEventListener("scroll", updateReturnToTopVisibility);
updateReturnToTopVisibility();
