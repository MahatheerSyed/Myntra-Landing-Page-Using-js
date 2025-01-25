let searchInput = document.getElementById("searchInput");
let searchIcon = document.querySelector(".fa-magnifying-glass");
searchInput.addEventListener("focus", () => {
  searchIcon.addEventListener("mouseover", () => {
    searchIcon.style.backgroundColor = "white";
    searchIcon.style.border = "0.5px solid rgba(0, 0, 0, 0.292)";
  });
  searchInput.style.backgroundColor = "white";
  searchInput.style.border = "0.5px solid rgba(0, 0, 0, 0.292)";
});
