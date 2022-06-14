



const btn = document.querySelector(".btn");
const body = document.body;

btn.addEventListener("click",function(e){
e.preventDefault();
const renkler = ["red", "green", "blue", "black"];
const randomRenk = Math.floor(Math.random()*renkler.length);
document.body.style.background = renkler[randomRenk];

} )