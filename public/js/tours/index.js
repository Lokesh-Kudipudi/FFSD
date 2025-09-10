function handleSearch() {
  const input = document.querySelector("#location");
  if (input.value.length == 0) {
    window.location.href = `/tours/search`;
  } else {
    window.location.href = `/tours/search?q=${input.value}`;
  }
}
