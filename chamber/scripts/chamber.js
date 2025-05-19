const gridBtn = document.getElementById("gridViewBtn");
const listBtn = document.getElementById("listViewBtn");
const directory = document.getElementById("directory");

gridBtn.addEventListener("click", () => {
    directory.classList.remove("list-view");
    directory.classList.add("business-cards");
});

listBtn.addEventListener("click", () => {
    directory.classList.remove("business-cards");
    directory.classList.add("list-view");
});
