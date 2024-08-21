// MENU button,meni barvy pro telefon

// Funkce pro přepínání menu
function toggleMenu() {
    const colorButton = document.getElementById("menu-mobile-button-container");
    const menuMobile = document.getElementById("menu-mobile");
    const menuButton = document.getElementById("menu-mobile-button");
    if (menuButton.innerText === "Zobrazit menu") {
        menuButton.innerText = "Zavřít menu";
        menuMobile.style.display = "flex";
        colorButton.style.backgroundColor = "rgba(6,6,68, 0.9)";
    } else {
        menuButton.innerText = "Zobrazit menu";
        menuMobile.style.display = "none";
    }
}

// Přidání posluchače událostí přímo na tlačítko menu
document.getElementById("menu-mobile-button").addEventListener("click", function(event) {
    toggleMenu();
    // Zabránění bublání události
    event.stopPropagation();
});

// Přidání globálního posluchače událostí pro zavření menu
document.addEventListener("click", function() {
    const menuMobile = document.getElementById("menu-mobile");
    const menuButton = document.getElementById("menu-mobile-button");
    if (menuMobile.style.display === "flex") {
        menuButton.innerText = "Zobrazit menu";
        menuMobile.style.display = "none";
    }
});


/*
function menuClicked(){
const menuMobile = document.getElementById("menu-mobile");
const menuButton = document.getElementById("menu-mobile-button");
document.addEventListener("click", function(clicked));
if (menuButton.innerText === "Zobrazit menu"){
menuButton.textContent = "Zavřít menu";
menuMobile.style.display = "flex";
} else if (menuButton.innerText === "Zavřít menu" || clicked.target){
menuButton.textContent = "Zobrazit menu";
menuMobile.style.display = "none";
}
}
*/


/*
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
*/








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

//schovani button menu mobile
let lastScrollTop = 50; // Pozice posledního scrollu

window.addEventListener("scroll", function() {
   let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   
   if (currentScroll > lastScrollTop){
       // Scroll dolů
       document.querySelector("#center-menu-mobile").style.display = "none"; // Skryje hlavičku
   } else {
       // Scroll nahoru
       document.querySelector("#center-menu-mobile").style.display = "flex"; // Zobrazí hlavičku
   }
   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Aktualizuje pozici posledního scrollu
}, false);

//konec schovani menu mobile

$(document).ready(function() {
    var previousScroll = 0;

    $(window).on('scroll', function() {
        var currentScroll = $(this).scrollTop();

        if (currentScroll > previousScroll) {
            // Posouváme dolů - skryjeme menu
            $('#fixmenu').css('top', '-100px'); // Skrýt menu posunutím nahoru
        } else {
            // Posouváme nahoru - zobrazíme menu
            $('#fixmenu').css('top', '28px'); // Zobrazit menu vrácením do původní polohy
        }

        previousScroll = currentScroll;
    });
});

