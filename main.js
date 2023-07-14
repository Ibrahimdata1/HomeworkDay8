let list = [
  {
    image: "images/pic1.jpg",
    productname: "Product1",
    price: "$1300",
  },
  {
    image: "images/pic2.jpg",
    productname: "Product2",
    price: "$1300",
  },
  {
    image: "images/pic3.jpg",
    productname: "Product3",
    price: "$1300",
  },
  {
    image: "images/pic4.jpg",
    productname: "Product4",
    price: "$1300",
  },
  {
    image: "images/pic5.jpg",
    productname: "Product5",
    price: "$1300",
  },
  {
    image: "images/pic6.jpg",
    productname: "Product6",
    price: "$1300",
  },
  {
    image: "images/pic7.jpg",
    productname: "Product7",
    price: "$1300",
  },
  {
    image: "images/pic8.jpg",
    productname: "Product8",
    price: "$1300",
  },
  {
    image: "images/pic9.jpg",
    productname: "Product9",
    price: "$1300",
  },
  {
    image: "images/pic1.jpg",
    productname: "Product1",
    price: "$1300",
  },
  {
    image: "images/pic2.jpg",
    productname: "Product2",
    price: "$1300",
  },
  {
    image: "images/pic3.jpg",
    productname: "Product3",
    price: "$1300",
  },
];
let showpic = document.querySelector(".product-container");

let blank = ''
for (let i = 0; i < list.length; i++){
    let data = list[i]
    blank += `<div class="item">
    <div class="item-img"><img src="${data.image}" alt="pic1" /></div>
    <div class="item-text">
      <h3>${data.productname}</h3>
      <h2>${data.price}</h2>
    </div>
    <div class="item-button">
      <button class="button-buy">Buy</button>
      <button class="button-details">Details</button>
    </div>
  </div>`
}   
showpic.innerHTML = blank
