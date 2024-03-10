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

//scroll top button start
const scrollButton = document.getElementById("scrollTopButton");
let setPosition = 200;

window.addEventListener("scroll", function() {
    
    let currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (currentPosition > setPosition){
        scrollButton.style.opacity = "1";
    }
    else{
        scrollButton.style.opacity = "0";
    }
});

function nahoru() {
    console.log("scroll top aktivovan");
    window.scrollTo({top: 0, behavior: "smooth"});
}


//scroll top button konec
