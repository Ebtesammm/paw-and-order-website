var cartList, totalPrice, menu;

// Describe this function...
function addToCart() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_cartList = document.getElementById('cartList');
  let new_li = document.createElement('li');
  new_li.innerText = cartList.pop();

  element_cartList.appendChild(new_li);
}

// Describe this function...
function total_price() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_total = document.getElementById('total');
  element_total.innerText = totalPrice.reduce((a,b) => a+b, 0);
}


cartList = [];
totalPrice = [];


document.getElementById('product1').addEventListener('click', (event) => {
  cartList.push('Flying Disc Toy');
  totalPrice.push(1.98);
  addToCart();
  total_price();

});

document.getElementById('product2').addEventListener('click', (event) => {
  cartList.push('Chew Toy');
  totalPrice.push(2.35);
  addToCart();
  total_price();

});

document.getElementById('product3').addEventListener('click', (event) => {
  cartList.push('Dog Treat Puzzle For Fun Slow Feeder');
  totalPrice.push(7.14);
  addToCart();
  total_price();

});

document.getElementById('product4').addEventListener('click', (event) => {
  cartList.push('Cozy Hot Dog-Shaped Pet Bed');
  totalPrice.push(28.1);
  addToCart();
  total_price();

});

document.getElementById('product5').addEventListener('click', (event) => {
  cartList.push('Double Bowls Set');
  totalPrice.push(10.15);
  addToCart();
  total_price();

});

document.getElementById('product6').addEventListener('click', (event) => {
  cartList.push('Hair Remover Brush');
  totalPrice.push(4.1);
  addToCart();
  total_price();

});

document.getElementById('product7').addEventListener('click', (event) => {
  cartList.push('Quick-Dry Bath Towel');
  totalPrice.push(6.2);
  addToCart();
  total_price();

});

document.getElementById('product8').addEventListener('click', (event) => {
  cartList.push('Car Seat Comfortable And Waterproof');
  totalPrice.push(22.5);
  addToCart();
  total_price();

});;


/* Build an image carousel */

var urlImages;

// Describe this function...
function firstImage() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_image = document.getElementById('image');
  element_image.setAttribute("src", urlImages[0]);
  urlImages.push(urlImages.shift());
}

// Describe this function...
function nextImage() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  firstImage();
}

// Describe this function...
function previousImage() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  nextImage();
}


urlImages = ['https://img.kwcdn.com/product/1dab9add96/e4484c3a-7678-47f0-a867-3dee1afa1749_800x800.jpeg?imageView2/2/w/800/q/70/format/webp', 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/ff98b17056d9227c6d48b562359062ea.jpg?imageView2/2/w/800/q/70/format/webp', 'https://img.kwcdn.com/product/fancy/e20b8972-5308-425a-ba33-ec5df0d33df0.jpg?imageView2/2/w/800/q/70/format/webp'];
firstImage();


document.getElementById('next').addEventListener('click', (event) => {
  nextImage();

});

document.getElementById('previous').addEventListener('click', (event) => {
  previousImage();

});