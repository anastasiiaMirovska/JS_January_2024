// - За допомогою циклу for і document.write() вивести 10 блоків div з довільним текстом всередині

for(let i = 0; i < 10; i++){
    document.write(`<div>Programmer</div>`);
}
// - За допомогою циклу for і document.write() вивести 10 блоків div з довільним текстом і індексом всередині
for(let i = 0; i < 10; i++){
    document.write(`<div>Hello, my friend ${i+1}</div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 з довільним текстом всередині.
let index = 1;
while(index <= 20){
    document.write(`<h1>Привіт, світ</h1>`);
    index++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 з довільним текстом і індексом всередині.
let element = 1;
while(element <= 20){
    document.write(`<h1>День програмування ${element}</h1>`);
    element++;
}
// - Використовуючи дані з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
document.write(`<ul>`)
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for(let i of listOfItems){
    document.write(`<li>${i}</li>`)
}
document.write(`</ul>`)

// -----------------------------------------------
//
//     Використовуючи дані з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
document.write(`<h2>Цикл for із ітератором</h2>`)
for(let i= 0; i < products.length; i++){
    document.write(`
                    <div class="product-card">
                        <h3 class="product-title">${products[i].title}. Price - ${products[i].price}</h3>
                        <img src=${products[i].image} alt="" class="product-image">
                    </div>`)
}

document.write(`<h2>Цикл for of</h2>`)
for(let element of products){
    document.write(`
                    <div class="product-card">
                        <h3 class="product-title">${element.title}. Price - ${element.price}</h3>
                        <img src=${element.image} alt="" class="product-image">
                    </div>`)
}

document.write(`<h2>Цикл while</h2>`)
let count = 0;
while(count<products.length){
    document.write(`
                    <div class="product-card">
                        <h3 class="product-title">${products[count].title}. Price - ${products[count].price}</h3>
                        <img src=${products[count].image} alt="" class="product-image">
                    </div>`)
    count++;
}

// --------------------
//     є масив
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for(let user of users){
    if(user.status === true){
        document.write(`<p style="color:deeppink">Користувач зі статусом true: ${user.name} віком ${user.age} років</p>`)
    }
    else if(user.status === false){
        document.write(`<p style="color:deepskyblue">Користувач зі статусом false: ${user.name} віком ${user.age} років</p>`)
    }
    if(user.age>30){
        document.write(`<p style="color:darkslategray">Користувач старший за 30 років: ${user.name} віком ${user.age} років</p>`)
    }
}
