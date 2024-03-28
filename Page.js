const openBtn = document.getElementById("open-btn");
const exitBtn = document.getElementById("exit-btn");
const listBtn = document.getElementById("list-btn");
const menuImg = document.querySelector(".menu img");

openBtn.addEventListener("click", function() {
    listBtn.classList.toggle("hidden");
    menuImg.style.visibility = "visible";
});

exitBtn.addEventListener("click", function() {
    listBtn.classList.toggle("hidden");
    menuImg.style.visibility = "hidden";
});
