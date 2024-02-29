// MENU button,meni barvy pro telefon
function menuClicked(){
const menuButton = document.getElementById("menu-mobile-button");
if (menuButton.innerText === "Zobrazit menu"){
menuButton.textContent = "Zavřít menu";

} else {
    menuButton.textContent = "Zobrazit menu";

}
}

function menuButtonClicked(){
const colorButton = document.getElementById("menu-mobile-button-container");
const menuButton = document.getElementById("menu-mobile-button");
if (menuButton.innerText === "Zobrazit menu"){
colorButton.style.backgroundColor = "rgba(6,6,68, 0.9)";
} else {
    colorButton.style.backgroundColor = "rgba(33, 33, 33, 0.9)";
}
}

function showMobileMenu(){
const menuButton = document.getElementById("menu-mobile-button");
const showMobileMenu = document.getElementById("menu-mobile");
if (menuButton.innerText === "Zobrazit menu"){
showMobileMenu.style.display = "none";
} else {
showMobileMenu.style.display = "flex";
}
}
//KONEC MENU button funkce barev
