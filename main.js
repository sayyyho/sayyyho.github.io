const goHome = document.querySelector(".title a");
const goPage = document.querySelector(".title:nth-child(2) a");

function changeHomeColor(){
    goHome.style.color = "gray";
}

function changePageColor(){
    goPage.style.color = "gray";
}

function changeOrigin(){
    goHome.style.color = "black";
    goPage.style.color = "black"
}

goHome.addEventListener("mouseover", changeHomeColor);
goPage.addEventListener("mouseover", changePageColor);
goHome.addEventListener("mouseleave", changeOrigin);
goPage.addEventListener("mouseleave", changeOrigin);
