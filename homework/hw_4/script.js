// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a, b){
    return a*b;
}
console.log(rectangle(3,5));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r){
    return Math.PI*r**2;
}
console.log(circle(4));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(h,r){
    return 2*Math.PI*r**2 + 2*Math.PI*r*h;
}
console.log(cylinder(5,2));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка приймає масив та виводить кожен його елемент
function array_reader(arr){
    for(let element of arr){
        console.log(element)
    }
}
array = ['hello', 'Okten', 'manager',10];
array_reader(array);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text_arg){
    document.write(`<p>${text_arg}</p>`)
}
paragraph('I started from C language and now I`m writing code in JS. What`s more, I can work with C++ and Python.' +
    ' I`m a web-designer as well.');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul_trio(argument){
    document.write(`<ul>
        <li>${argument}</li>
        <li>${argument}</li>
        <li>${argument}</li>
</ul>`)
}
ul_trio('Work!');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ul_number(argument, number= 10){
    document.write(`<ul>`)
    for(let i=0; i<number; i++){
        document.write(`<li>${argument}</li>`)
    }
    document.write(`</ul>`)
}
ul_number('Relax!',5);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// Не зовсім зрозуміла це завдання, зробила трьома варіантами, надіюсь, щоч один правильний

console.log('Варіант 1');
function build_list1(...arguments){
    let arg_list = []
    for(let argument of arguments){
        arg_list.push(argument)
    }
    return arg_list;
}
let new_list1 = build_list1('Strawberry','raspberry','lemon', true, 12);
console.log(new_list1);

// Варіант 2:
document.write('Варіант 2');
function build_list2(...arguments){
    document.write(`<ul>`)
    for(let argument of arguments){
        document.write(`<li>${argument}</li>`)
    }
    document.write(`</ul>`)
}
build_list2('Strawberry','raspberry','lemon', true, 12);


// Варіант 3:
document.write('Варіант 3')
function build_list3(items_list){
    document.write(`<ul>`)
    for(let element of items_list){
        document.write(`<li>${element}</li>`)
    }
    document.write(`</ul>`)
}
let arg_list = ['Strawberry','raspberry','lemon', true, 12];
build_list3(arg_list);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function massive_out(massive){
    for(element of massive){
        document.write(`<div>
        <pre>
        ID: ${element.id}
        name: ${element.name}
        age: ${element.age}</pre>
    </div>`)
    }
}
let massive = [
    {id: 234167, name:'Petro', age: 45},
    {id: 547823, name:'Nadia', age: 50},
    {id: 145213, name:'Anna', age: 25}
]
massive_out(massive);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка повертає найменше число з масиву
function minimal(array){
    let minimum = array[0];
    for(let number of array){
        if(number<minimum){
            minimum = number;
        }
    }
    console.log(`In array ${array} the smallest number is ${minimum}`)
}
let num_array = [1, -3, 9, 7, 0, -8, 4, 5, 1, -11, 7];
minimal(num_array);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr){
    let suma =0;
    for(let number of arr){
        suma+=number;
    }
    return suma;
}
let arr_sum = [1, 2, 10];
let result_sum = sum(arr_sum); // Спеціально створила return і змінну, щоб показати, що результат функції можна в
// подальшому потім використовуавти в коді
console.log(`Result: ${result_sum}`);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2){
    if(index1<0 || index2<0){
        return 'Bad index, try again';
    }
    else {
        let len = arr.length;
        if(index1 > len - 1){
            index1 = 0;
        }
        if(index2 > len - 1){
            index2 = len - 1;
        }
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        return arr;
    }
}
let arr_swap = [13, 24, 56, 87, 25, 94];
let result_swap = swap(arr_swap, 6,7);
console.log(result_swap);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency){
    for(let element of currencyValues){
        if(element.currency === exchangeCurrency){
            return sumUAH/element.value;
        }
    }
}
let result_currency = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');
console.log(result_currency)