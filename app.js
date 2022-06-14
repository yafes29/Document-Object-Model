
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

document.querySelector(".tıkla").addEventListener("click",clickFunc);

function clickFunc(e){

    console.log("Butona tıkladın");
    e.preventDefault();
}