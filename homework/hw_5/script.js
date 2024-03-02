// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const rectangle = (a, b) => a*b;
console.log(rectangle(3,4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const circle = r => Math.PI*r**2;
console.log(circle(4));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cylinder = (h,r) => 2*Math.PI*r**2+2*Math.PI*r*h;
console.log(cylinder(9,3));

// - створити функцію яка приймає масив та виводить кожен його елемент
const array_reader = array => {
    for( let element of array){
        console.log(element);
    }
}
let array_read = [1,4,2,7,3,78];
array_reader(array_read);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const paragraph = text_arg => document.write(`<p>${text_arg}</p>`);
paragraph('I used to work in Figma for 1,5 years, but now I`m a programmer.');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const ul_trio = argument =>{
    document.write('<ul>');
    for(let i=0; i<3; i++){
        document.write(`<li>${argument}</li>`);
    }
    document.write('</ul>');
}
ul_trio('Study hard');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const ul_number = (argument, number=1) =>{
    document.write('<ul>');
    for(let i=0; i<number; i++){
        document.write(`<li>${argument}</li>`);
    }
    document.write('</ul>');
}
ul_number('Work!', 10);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const build_list = items_list=>{
    document.write(`<ul>`)
    for(let element of items_list){
        document.write(`<li>${element}</li>`)
    }
    document.write(`</ul>`)
}
let arg_list=['Strawberry','raspberry','lemon', true, 18];
build_list(arg_list);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const massive_out = massive=>{
    for(element of massive){
        document.write(`<div>
        <pre>
        ID: ${element.id}
        name: ${element.name}
        age: ${element.age}</pre>
    </div>`)
    }
}
let massive1 =[
    {id: 234160, name:'Petro', age: 47},
    {id: 547823, name:'Oleksandr', age: 51},
    {id: 145218, name:'Anna', age: 25}
]
massive_out(massive1);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка повертає найменше число з масиву
const minimal = array=>{
    let minimum = array[0];
    for(let number of array){
        if(number<minimum){
            minimum = number;
        }
    }
    console.log(`In array ${array} the smallest number is ${minimum}`)
}
let num_array1 = [1, -3, 9, 7, 0, -8, 4, 5, 1, -11, 7];
minimal(num_array1);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = arr =>{
    let suma =0;
    for(let number of arr){
        suma+=number;
    }
    return suma;
}
let arr_sum1 = [11, 23, 10];
let result_sum1 = sum(arr_sum1);
console.log(`Result: ${result_sum1}`);
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index_1, index_2)=>{
    if(index_1<0 || index_2<0){
        return 'Bad index, try again';
    }
    else {
        let len = arr.length;
        if(index_1 > len - 1){
            index_1 = 0;
        }
        if(index_2 > len - 1){
            index_2 = len - 1;
        }
        let temp = arr[index_1];
        arr[index_1] = arr[index_2];
        arr[index_2] = temp;
        return arr;
    }
}
let arr_swap1 = [34, 15, 70, 12, 25, 84];
let result_swap1 = swap(arr_swap1, 6,7);
console.log(result_swap1);
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange =(sumUAH,currencyValues,exchangeCurrency)=>{
    for(let element of currencyValues){
        if(element.currency === exchangeCurrency){
            return sumUAH/element.value;
        }
    }
}
let result_currency1 = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR');
console.log(result_currency1);
