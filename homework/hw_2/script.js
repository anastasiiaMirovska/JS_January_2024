// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let colors = ['magenta', 'ivory', 'blue', 'gold', 'aqua', 'deeppink', 'crimson', 'lightgreen', 'yellow', 'grey']
console.log(colors[0], colors[1], colors[2], colors[3], colors[4], colors[5], colors[6], colors[7], colors[8], colors[9] )


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {title: 'Hello, world', pageCount: 102, genre: 'comedy'}
let book2 = {title: 'Java in everyday life', pageCount: 870, genre: 'poem'}
let book3 = {title: 'Let`s change your job', pageCount: 437, genre: 'guide'}


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'Hello, programmer',
    pageCount: 202,
    genre: 'drama',
    authors: [
        {name: 'Petro', age: 32,},
        {name: 'Vasyl', age: 34,}
    ]
}
let book5 = {
    title: 'Hard life of a programmer',
    pageCount: 80,
    genre: 'tragedy',
    authors: [
        {name: 'Katia', age: 32,},
        {name: 'Volodymyr', age: 34,},
        {name: 'Oleksandr', age: 23,},
        {name: 'Maria', age: 18,}
    ]
}
let book6 = {
    title: 'IT',
    pageCount: 72,
    genre: 'poem',
    authors: [
        {name: 'Piter', age: 39,},
        {name: 'Lolita', age: 44,},
        {name: 'Igor', age: 92,},
    ]
}
console.log(book6)


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Ivan', username: 'Ivanenko', password:'123456789'},
    {name: 'Petro', username: 'Petrenko', password:'98706521'},
    {name: 'Olena', username: 'Olenka', password:'14081982'},
    {name: 'Maria', username: 'Mariika', password:'28122003'},
    {name: 'Oles', username: 'Lesyk', password:'18102019'},
    {name: 'Volodymyr', username: 'Vol154u', password:'09032004'},
    {name: 'Katya', username: 'Kate12', password:'12081790'},
    {name: 'Yulia', username: 'Yu1i@', password:'11111987'},
    {name: 'Bohdan', username: 'Boh14dan', password:'04072010'},
    {name: 'Anastasiia', username: 'Sijka12', password:'12653478'}
]
console.log(users[0].password,users[1].password,users[2].password,users[3].password,users[4].password,users[5].password,users[6].password,users[7].password,users[8].password,users[9].password)

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 2;
if (x !== 0){
    console.log('Вірно')
}
else{
    console.log('Невірно')
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 15;
if(time>=0 && time<=15){
    console.log(`${time} хв відноситься до першої чверті години`)
}
else if(time>15 && time<=30){
    console.log(`${time} хв відноситься до другої чверті години`)
}
else if(time>30 && time<=45){
    console.log(`${time} хв відноситься до третьої чверті години`)
}
else if(time>45 && time<=59){
    console.log(`${time} хв відноситься до четвертої чверті години`)
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 23;
if(day>1 && day<=10){
    console.log(`${day} день відноситься до першої декади місяця`)
}
else if(day>10 && day<=20){
    console.log(`${day} день відноситься до другої декади місяця`)
}
else if(day>20 && day<=31){
    console.log(`${day} день відноситься до третьої декади місяця`)
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let answer = parseInt(prompt("Введіть номер дня тижня: "));
switch(answer){
    case 1:
        document.write('<h2>Monday</h2>');
        break;
    case 2:
        document.write('<h2>Tuesday</h2>');
        break;
    case 3:
        document.write('<h2>Wednesday</h2>');
        break;
    case 4:
        document.write('<h2>Thursday</h2>');
        break;
    case 5:
        document.write('<h2>Friday</h2>');
        break;
    case 6:
        document.write('<h2>Saturday</h2>');
        break;
    case 7:
        document.write('<h2>Sunday</h2>');
        break;
    default:
        document.write('<h2 style="color:red">You have entered wrong number</h2>');
        break;
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let num1= 7;
let num2= 3;
if(num1>num2){
    console.log(`Число ${num1} є максимальними числом`)
}
else if(num2>num1){
    console.log(`Число ${num2} є максимальними числом`)
}
else{
    console.log(`Ці числа рівні`)
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x_ = 1;
x_ = x_ || 'default';
console.log(`${x_}`);

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration>5){
    console.log('Super')
}
if(coursesAndDurationArray[1].monthDuration>5){
    console.log('Super')
}
if(coursesAndDurationArray[2].monthDuration>5){
    console.log('Super')
}
if(coursesAndDurationArray[3].monthDuration>5){
    console.log('Super')
}
if(coursesAndDurationArray[4].monthDuration>5){
    console.log('Super')
}
if(coursesAndDurationArray[5].monthDuration>5){
    console.log('Super')
}
