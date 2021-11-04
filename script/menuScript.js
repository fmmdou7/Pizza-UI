var mainMenu = document.querySelector('.mainMenu')

var itemName = new Array()
var itemPrice = []

// var mobileNum = /^(((012)|(011)|(010)|(015))[0-9]{8})$/

var makeOrderBtn = document.querySelector('#makeOrder')
var contBtn = document.querySelector('[value="Continue"]')
var backFormBtn = document.querySelector('[value="Go Back"]')
var originalBody = document.querySelector('#menu')
var mainSection = document.querySelector('#mainSec')    //customer details
var mainSectionRec = document.querySelectorAll('#mainSec')[1] //order details
var mainSectionThanks = document.querySelectorAll('#mainSec')[2] //thanks page
var goBackToMenuBtn = document.querySelector('[value="Go Back To Menu"]')
var completeOrderBtn = document.querySelector('[value="Complete Order"]')
var foodField = document.querySelectorAll('.orderRec input[type="text"]')[0]

var totalPrice = 0.00

var cardd = document.querySelector('.card')
var counter = 0;
var emptyCartFlag = false

// Form Validation
phone = document.querySelector('[type="tel"]')
n = document.querySelector('[placeholder="Name"]')
addres = document.querySelector('[placeholder="Address"]')

phone.addEventListener('keydown', function (e) {
    if (!(e.keyCode >= 65 && e.keyCode <= 90) ) {
    }
    else
        e.preventDefault()
})

n.addEventListener('keydown', function (e) {  //0-9 .. 96-105
    if (!(e.keyCode >= 96 && e.keyCode <= 105)) {
    }
    else
        e.preventDefault()
})

// Insert data Dynamically
var elementToInsertBefore = document.querySelector('.orderRec .btns')

mainSectionRec.addEventListener('click', function (e) {
    if (e.target.tagName == "BUTTON") {
        var t = parseInt(e.target.previousElementSibling.value)
        console.log(t)
        e.target.parentElement.remove()
        totalPrice -= t
        //insertOrder("Total Price",totalPrice)
        var i = document.getElementsByTagName("label")
        for (var j = 0; j < i.length; j++) {
            if (i[j].innerText == 'Total Price') {
                if (totalPrice <= 2.0 || isNaN(totalPrice)) {
                    i[j].nextElementSibling.value = 0
                    emptyCartFlag = true
                }
                else
                    i[j].nextElementSibling.value = totalPrice;
                //i[j].parentElement.remove()
            }
        }
        counter--;
        cardd.innerHTML = counter
    }
})

mainMenu.addEventListener('click', function (e) {

    
    if (e.target.tagName == 'INPUT') {
        counter++
        var ch = e.target.parentNode.children

        for (var i = 0; i < ch.length; i++) {
            switch (ch[i].tagName) {
                case 'H3':
                    itemName.push(ch[i].innerText)
                    break
                case 'SPAN':
                    itemPrice.push(ch[i].innerText)
                    break

            }
        }
        cardd.innerHTML = counter
    }
})


makeOrderBtn.addEventListener('click', function () {
    if (itemName != "") {
        originalBody.style.display = 'none'
        mainSection.style.display = 'block'
        window.scrollTo(20, 20)
    }
    else
        alert('Choose an item')

})
backFormBtn.addEventListener('click', function () {
    // originalBody.style.display = 'block'
    // mainSection.style.display = 'none'
    window.open('menu.html', '_self')
})

//var bg = document.querySelector('#bgCon')

function insertOrder(food, prc) {
    var d = document.createElement('div')
    var lab = document.createElement('label')
    var inp = document.createElement('input')
    var btn = document.createElement('button')
    inp.setAttribute('type', 'text')
    inp.setAttribute('disabled', 'disabled')

    lab.innerHTML = food
    inp.value = prc

    btn.innerText = 'X'
    d.appendChild(lab)
    d.appendChild(inp)
    if (food != 'Total Price')
        d.appendChild(btn)

    elementToInsertBefore.before(d)
}
function calcPrice() {
    itemPrice.forEach(function (item) {
        totalPrice += parseInt(item)
    })
    return totalPrice
}

contBtn.addEventListener('click', function () {

    if (n.value != "" && addres.value != "" && phone.value != "") {
        mainSection.style.display = 'none'
        mainSectionRec.style.display = 'block'
        window.scrollTo(10, 10)

        for (var i = 0; i < itemName.length; i++) {
            insertOrder(itemName[i], itemPrice[i])
        }
        insertOrder("Total Price", calcPrice())

    }
    else
        alert('Fields can not be empty')

})
goBackToMenuBtn.addEventListener('click', function () {
    // mainSectionRec.style.display = 'none'
    // originalBody.style.display = 'block'
    // itemPrice = []
    // itemName = []
    window.open('menu.html', '_self')
})
completeOrderBtn.addEventListener('click', function () {
    if (emptyCartFlag) {
        alert('You have no Items, you will be redirected to home')
        window.open('menu.html', '_self')
    }
    else
    {
        mainSectionRec.style.display = 'none'
    mainSectionThanks.style.display = 'block'

    console.log(n.value)
    document.querySelector('.serveText h3').innerHTML += " " + n.value
    }
})
