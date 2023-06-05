 
 const categoriesList = document.querySelector('#categories');
 const categoriesItem = document.querySelectorAll('.item');
 console.log("Number of categories:" , categoriesItem.length);
 
 
 
categoriesItem.forEach ((elements) => {

  const categoriesTitle = elements.querySelector('h2').textContent 
  console.log("Category:", categoriesTitle) 
  const categoriesSub = elements.getElementsByTagName('li');
  console.log("Elements:", categoriesSub.length)
})

 