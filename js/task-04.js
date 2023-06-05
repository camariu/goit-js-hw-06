const counterHTML = document.getElementById('value');
const incrimentBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]')

let counter = 0 

decrementBtn.addEventListener('click', function() {
    counter -- ;
     counterHTML.textContent = counter
});

incrimentBtn.addEventListener('click', function() {
    counter ++ ;
     counterHTML.textContent = counter
     
});

console.log(counter)

incrimentBtn.style.backgroundColor = "green"
decrementBtn.style.backgroundColor = "red"

var titleh1 = document.createElement('h1');

titleh1.textContent = "Butoane de incrementare si decrementare";

const body = document.querySelector('body');
const firstChild = body.firstChild

body.insertBefore(titleh1, firstChild)


titleh1.style.color = "blue"