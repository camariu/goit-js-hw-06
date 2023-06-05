const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

/*
const ul = document.querySelector('.gallery')

for (let i = 0; i< images.length; i++) {
  const image = images[i];
   
  const li = `<li><img src = "${image.url}" alt = "${image.alt}"></li>`;

 ul.insertAdjacentHTML('beforeend', li)


}

ul.classList.add("gallery-container")

const galleryItems = ul.querySelectorAll("li")
galleryItems.forEach((item) => {
  item.classList.add("gallery-item")
 
  console.log(galleryItems)
});
 
const size = document.querySelectorAll('.gallery-item');
size.forEach((item) => {
  item.style.height = '100px';
  item.style.width = '100px';
});

*/

const ul = document.querySelector('.gallery');

for (let i = 0; i < images.length; i++) {
  const image = images[i];
  const li = `<li><img src="${image.url}" alt="${image.alt}"></li>`;
  ul.insertAdjacentHTML('beforeend', li);
}

ul.classList.add('gallery-container');

const galleryItems = ul.querySelectorAll('li');
galleryItems.forEach((item) => {
  item.classList.add('gallery-item');
});

const size = document.querySelectorAll(li.src);
size.forEach((item) => {
  item.style.height = '250px';
  item.style.width = '250px';
  item.style.displey = 'flex'
});
