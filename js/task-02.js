const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.querySelector('ul');
for(let i = 0; i< ingredients.length ; i++){
  const li = document.createElement('li');
  li.textContent = ingredients[i];
  ul.appendChild(li);
 
}
 
 console.log(ingredients)


 
 