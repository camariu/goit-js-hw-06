const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

fontSizeControl.addEventListener('input', function() {
  const fontSize = fontSizeControl.value + 'px';
  textSpan.style.fontSize = fontSize;
});

textSpan.style.color = "blue"
 
const isComing = prompt("Please confirm hotel reservation");
console.log(isComing);