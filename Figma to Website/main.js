const searchBox = document.querySelector(".search-box");
const navBtnContainer = document.querySelector(".nav-btn-container");
const searchButton = document.querySelector(".search-button");
const closeButton = document.querySelector(".close-button");

searchButton.addEventListener("click", () => {
    searchBox.classList.add("active");
    navBtnContainer.classList.add("active");
});

closeButton.addEventListener("click", () => {
    searchBox.classList.remove("active");
    navBtnContainer.classList.remove("active");
});


