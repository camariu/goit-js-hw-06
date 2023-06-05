
const inputElement = document.getElementById('name-input');
const outputElement = document.getElementById('name-output')

 inputElement.addEventListener('input', function(){
    const inputValue = inputElement.value;
    if(inputValue !== ''){
        outputElement.textContent = inputValue
    }else{
        outputElement.textContent = "Anonymouse"
    }
 })

 