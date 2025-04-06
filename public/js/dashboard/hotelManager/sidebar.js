document
  .getElementById("toggle-sidebar")
  .addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("collapsed");
  });

const dropdownBtns = document.querySelectorAll(".dropdown-btn");

dropdownBtns.forEach((button) => {
  button.addEventListener("click", function () {
    let dropdownContent = this.parentElement.nextElementSibling;
    dropdownContent.classList.toggle("active");

    // Rotate arrow icon
    let arrowIcon = this.querySelector(".material-symbols-outlined");
    if (dropdownContent.classList.contains("active")) {
      arrowIcon.textContent = "keyboard_arrow_up";
    } else {
      arrowIcon.textContent = "keyboard_arrow_down";
    }
  });
});
