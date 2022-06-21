
// WİNDOW



// console.log(window);

// console.log(window.location.hostname);

// console.log(window.innerWidth);

// console.log(window.outerWidth);

// let windows = document.all[3];

// console.log(windows);

// var wndw = document.scripts;


// console.log(wndw);

// Seçiciler

// document.getElementById(id): id niteliği ile eşleşen ilk kaydı getirir.
// document.getElementsByName(name): name niteliği ile eşleşen tüm kayıtları dizi olarak  getirir.
// document.getElementsByTagName(etiketadı):etiket adı ile eşleşen tüm kayıtları dizi olarak getirir.
// document.getElementsByClassName(classAdı):class niteliği ile eşleşen tüm kayıtları dizi olarak getirir.
// document.querySelector(seçici): seçici ile eşleşen ilk kaydı getirir.
// document.querySelectorAll(seçici): seçici ile eşleşen tüm kayıtları dizi olarak getir.


// let veri;

// veri = window.document;

// veri = window.document.head;
// veri = window.document.URL;
// veri = window.document.domain;
// veri = window.document.images;

// console.log(veri);






// Elementlerin Seçilmesi

// -- Tek Element Seçimi --

// document.getElementById() metodu



// let veri;

// veri = document.getElementById("header");
// veri = document.getElementById("header").id;
// veri = document.getElementById("header").className;

// veri = document.getElementById("header");
// veri = veri.id;
// veri = veri.className;



// console.log(veri);


// -- Çoklu Element Seçimi --

// document.getElementsByClassName()

// let veri;

// veri = document.getElementsByClassName("list-group-item");

// veri = document.getElementsByClassName("list-group-item")[0];

// veri = veri[2];

// console.log(veri);

// Element Silme

// const taskList = document.querySelector("#task-list");

// taskList.remove();

// taskList.childNodes[2].remove(); 


// DOM EVENT 

// Event Listener ve Event Objesi

// btn.addEventListener("click" function () {
//     console.log("butona tıklandı");
// })


// CREATE ELEMENT

// const liler = document.createElement("li");
// const uller = document.createElement("ul");

// liler.className = "listItem";
// liler.id = "idItem";
// liler.setAttribute("date", "toggle");
// liler.appendChild(document.createTextNode("Hello World"));
// uller.appendChild(liler);

// const link = document.createElement("a");
// link.className = "linkItem";
// link.id = "linkId";
// link.setAttribute("title", "tool");
// link.innerHTML = "<span> 10 </span>"

// liler.appendChild(link);

// console.log(liler);


// ADDEVENLİSTENER(OLAY)

// document.querySelector(".tıkla").addEventListener("click",(e)=>{
   
//     console.log("Butona tıkladın");
//     e.preventDefault();
// })

// document.querySelector(".tıkla").addEventListener("click",clickFunc);

// function clickFunc(e){

//     const deger = e.target;
//     e.preventDefault();
//     console.log(deger);
// }


// Mouse Olayları

// const btn = document.querySelector(".tıkla");

// btn.addEventListener("mouseup", calıstır);

// function calıstır(e){
//     console.log(btn.type + " olay tipi");

// }


// KLAVYE OLAYLARI (Key Event)

// const formElement = document.querySelector("form");
// const inputElement = document.querySelector(".input_1");
// const submitElement = document.querySelector(".input_submit");

// inputElement.addEventListener("blur",function(e){
//     console.log(e.type);
// })


// LOCALSTRAGE- SESSİONSTORAGE

// localStorage.setItem("isim", "fikret");
// localStorage.setItem("yas", "40");
// // localStorage.getItem();
// localStorage.clear();


// sessionStorage.setItem("isim","fikret");


// const input = document.querySelector(".input_1");
// const submitBtn = document.querySelector(".input_submit");

// submitBtn.addEventListener("click",function(e){
//     const inputValue = input.value;
  
//     // localStorage.setItem("oturum", input.value);
  
//     let outurumDİzisi;
//     if(localStorage.getItem("oturum")=== null){
//         outurumDİzisi = [];
//     }
    
    
//     e.preventDefault();
// })


//SetTimeout , SetInterval

//SetTimeout => sadece 1 kere yuklenıyor
// SetInterval => sürekli yükleniyor

// const saat = setInterval(saatFunc,1000);

// function saatFunc (){
//     const a = new Date()
//     const b = a.toLocaleTimeString();
//     document.body.innerHTML = b;

// }

// console.log(saat);


// JavaScript Document Nesneleri & Metodları

// 01.Document.write();
// document.write("fikret");

// //02.innerHTML
// document.body.innerHTML = "<b>Hello World</b>";

// //03.İnnerText
// document.body.innerText = "Hello World";

//04.remove(), removeChild()
// const spanNesnesi = document.querySelector(".SpanClass");

// spanNesnesi.remove();


// OBJECT NESNELER

/* let obj = new Object();
obj.isim = "fikret";
obj.yas = 40;
obj.dogumgunu = function(){
    return "ismim " + this.isim + "yaşım : " + this.yas;
}

console.log(obj.isim);
console.log(obj.dogumgunu());
/*


