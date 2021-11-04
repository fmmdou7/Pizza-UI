var slideIMages = document.querySelector('.slider').children
var i =0;

function sliding(){
    slideIMages[slideIMages.length-1].style.display = 'none'
    if(slideIMages[i].nextElementSibling)
        slideIMages[i].nextElementSibling.style.display = 'none'
    if(slideIMages[i].previousElementSibling)
        slideIMages[i].previousElementSibling.style.display = 'none'
    slideIMages[i].style.display = 'block'
    i++
    if(i == slideIMages.length)
        i=0
}
setInterval(sliding,2000)

var menuBtns = document.querySelectorAll('.mainMenu button')

menuBtns[1].addEventListener('click',function(){
    this.classList.remove("button")
    this.classList.add("changeStyle")
})

        