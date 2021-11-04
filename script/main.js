
// Mini Menu
var menuBtns = document.querySelector('.mainMenu')
var pizza = document.querySelector(".pizza")
var drink = document.querySelector(".drinks")
var burger = document.querySelector(".burgers")
var pasta = document.querySelector(".pasta")

function toggleClass(e) {
    e.classList.toggle('dis')
}

menuBtns.addEventListener('click', function (e) {

    if (e.target.tagName == 'BUTTON') {

        for (var i = 0; i < menuBtns.children.length; i++) {
            if (menuBtns.children[i].tagName == "BUTTON")
                menuBtns.children[i].removeAttribute('id','changeStyle')
            if (menuBtns.children[i].tagName == "DIV")
                menuBtns.children[i].classList.add('dis')
        }

        e.target.setAttribute('id','changeStyle')

        if (e.target.innerText == 'Drinks')
            toggleClass(drink)

        else if (e.target.innerText == 'Burgers')
            toggleClass(burger)

        else if (e.target.innerText == 'Pizza') 
            toggleClass(pizza)
    
        else if (e.target.innerText == 'Pasta') 
            toggleClass(pasta)
    }
})


// Slider
var slideIMages = document.querySelector('.slider').children
var i = 0;

function sliding() {
    slideIMages[slideIMages.length - 1].style.display = 'none'
    if (slideIMages[i].nextElementSibling)
        slideIMages[i].nextElementSibling.style.display = 'none'
    if (slideIMages[i].previousElementSibling)
        slideIMages[i].previousElementSibling.style.display = 'none'
    slideIMages[i].style.display = 'block'
    i++
    if (i == slideIMages.length)
        i = 0
}
setInterval(sliding, 2000)
var modal = document.getElementById("myModal");
var btn = document.getElementById("reverseBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}