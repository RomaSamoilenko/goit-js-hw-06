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


const ulGallery = document.querySelector(".gallery");

const liGallery = images.map(({url, alt}) => `<li class="image"><img src="${url}" alt="${alt}" width="320"/>`).join("")
;

ulGallery.insertAdjacentHTML("beforeend", liGallery);
// .gallery{
//   display: flex;
//   flex-wrap: wrap;
//   border: 20px solid: #ece89d;

// }