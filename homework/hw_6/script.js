// - Знайти та вивести довжину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let word_array = ['hello world', 'lorem ipsum', 'javascript is cool'];
word_array.forEach(value => console.log(value.length));


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//Варіант 1
console.log('Варіант 1')
let new_array_upper = [];
word_array.forEach(value => new_array_upper.push(value.toUpperCase()));
console.log(new_array_upper);

//Варіант 2
console.log('Варіант 2');
word_array.forEach(value => console.log(value.toUpperCase()));


//Варіант 3
console.log('Варіант 3');
console.log(word_array.map(value => value.toUpperCase()));

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//Варіант 1
console.log('Варіант 1');
let upper_array = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
let new_array_lower = [];
upper_array.forEach(value => new_array_lower.push(value.toLowerCase()));
console.log(new_array_lower);
//Варіант 2
console.log('Варіант 2');
upper_array.forEach(value => console.log(value.toLowerCase()));

//Варіант 3
console.log('Варіант 3');
console.log(word_array.map(value => value.toLowerCase()));

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let stringToArray = str => str.split(' ');
let str2 = 'Ревуть воли як ясла повні';
let split_array = stringToArray(str2);
console.log(split_array);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let num_array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let map_string_array = num_array.map(value => value.toString());
console.log(map_string_array);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(array, direction) {
    if (direction === 'ascending') {
        array.sort((a, b) => a - b);
        return array;
    } else if (direction === 'descending') {
        array.sort((a, b) => b - a);
        return array;
    } else {
        console.log('You have written direction incorrectly');
    }
}

let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));


// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));
//Варіант 1
console.log('Варіант 1');
console.log(coursesAndDurationArray.map((value, index) => ({
    id: index + 1,
    title: value.title,
    monthDuration: value.monthDuration
})));
//Варіант 2
console.log('Варіант 2');
console.log(coursesAndDurationArray.map((value, index) => ({id: index + 1, ...value})));

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
let value = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

function fill_deck(cardSuit, value) {
    // Заповнює колоду 36-ма картами
    let deck = [];
    for (let i = 0; i < cardSuit.length; i++) {
        for (let j = 0; j < value.length; j++) {
            deck.push({
                cardSuit: `${cardSuit[i]}`,
                value: `${value[j]}`,
                color: `${define_color(cardSuit[i])}`
            })
        }
    }
    return shuffle(deck);
}

function define_color(Suit) {
    //Визначає який колір надати карті
    if (Suit === 'spade' || Suit === 'clubs') {
        return 'black';
    } else {
        return 'red';
    }
}

function shuffle(deck){
    // Мішає колоду карт
    let len = Math.floor(Math.random()* deck.length);
    for(let i=0 ; i<5; i++){
        for(let p = 0; p<len+1; p++){
            let new_pos = Math.floor(Math.random()*deck.length);
            let buff = deck[p];
            deck[p] = deck[new_pos];
            deck[new_pos] = buff;
        }
    }
    return deck;
}
let deck = fill_deck(cardSuit, value);
console.log(deck);

// - знайти піковий туз
console.log(deck.find(card => card.cardSuit==='spade'&&card.value==='ace'));

// - всі шістки
console.log('All six');
console.log(deck.filter(card => card.value==='6'));

// - всі червоні карти
console.log('All red');
console.log(deck.filter(card => card.color==='red'));

// - всі буби
console.log('All diamond');
console.log(deck.filter(card => card.cardSuit==='diamond'));

// - всі трефи від 9 та більше
console.log('All clubs bigger than 9');
console.log(deck.filter( card=>{
    if(card.cardSuit==='clubs'){
        if(['9','10', 'jack', 'queen', 'king', 'ace'].includes(card.value)){
            return card;
        }
    }
}));

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
console.log(deck.reduce((suits, card) =>{
    if(card.cardSuit==='spade'){
        suits.spades.push(card);
    }
    if(card.cardSuit==='diamond'){
        suits.diamonds.push(card);
    }
    if(card.cardSuit==='heart'){
        suits.hearts.push(card);
    }
    if(card.cardSuit==='clubs'){
        suits.clubs.push(card);
    }
    return suits;
},{spades:[], diamonds:[], hearts:[], clubs:[]}));

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter(card=> card.modules.includes('sass')));
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter(card=> card.modules.includes('docker')));
