function toggleDropdownHeader() {
  const dropdown = document.getElementById("dropdownMenuHeader");
  if (dropdown.style.display === "block") {
    dropdown.style.opacity = "0";
    dropdown.style.transform = "translateY(-10px)";
    setTimeout(() => {
      dropdown.style.display = "none";
    }, 300);
  } else {
    dropdown.style.display = "block";
    setTimeout(() => {
      dropdown.style.opacity = "1";
      dropdown.style.transform = "translateY(0)";
    }, 10);
  }
}

document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdownMenuHeader");
  const avatar = document.querySelector(".avatar");
  if (
    dropdown &&
    event.target !== avatar &&
    !avatar.contains(event.target)
  ) {
    dropdown.style.opacity = "0";
    dropdown.style.transform = "translateY(-10px)";
    setTimeout(() => {
      dropdown.style.display = "none";
    }, 300);
  }
});
