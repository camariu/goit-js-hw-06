
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
 