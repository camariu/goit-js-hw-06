
const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', function() {
   const inputValue = inputText.value;
   const expectedLength = inputText.getAttribute('data-length');

   if (inputValue.length === 6 ) {
      inputText.classList.remove('invalid');
      inputText.classList.add('valid');
   } else {
      inputText.classList.remove('valid');
      inputText.classList.add('invalid');
   }
});
/*
1. Selectează elementul câmpului de introducere folosind ID-ul 'validation-input' și atribuie-l variabilei inputText.

2. Atașează un eveniment de ascundere (blur) la elementul inputText:

   2.1. La declanșarea evenimentului blur, execută următoarea funcție:

      2.1.1. Obține valoarea introdusă în câmpul de introducere și atribuie-o variabilei inputValue.

      2.1.2. Verifică dacă lungimea valorii inputValue este egală cu 6:

         2.1.2.1. Dacă da, elimină clasa 'invalid' de la inputText și adaugă clasa 'valid'.
   
         2.1.2.2. Dacă nu, elimină clasa 'valid' de la inputText și adaugă clasa 'invalid'.

*/