// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let array10 = [];
array10.push(new User(12789021, 'Anna', 'Maziarko', 'annaM@gmail.com', '+0987656442'));
array10.push(new User(13416890, 'Marta', 'Cheriachenko', 'martochkaC@gmail.com', '+0983456402'));
array10.push(new User(45612890, 'Petro', 'Kotenko', 'petryk178@gmail.com', '+0687656442'));
array10.push(new User(25167840, 'Ivan', 'Udud', 'UdudIvanko@gmail.com', '+0507656456'));
array10.push(new User(18976520, 'Mykola', 'Antonovych', 'MykaAnton@gmail.com', '+0997656890'));
array10.push(new User(56734521, 'Emilia', 'Bandera', 'emilka_flower@gmail.com', '+0988456442'));
array10.push(new User(38098712 , 'Maria', 'Vydelko', 'vydelec@gmail.com', '+0502366442'));
array10.push(new User(45279012, 'Oleg', 'Kovbasa', 'OlegK@gmail.com', '+0687631442'));
array10.push(new User(90087640, 'Anatoliy', 'Zhydenko', 'anatoliyZhyd@gmail.com', '+0633456487'));
array10.push(new User(23146789, 'Luka', 'Shurkovych', 'ShurkovychLuka@gmail.com', '+0989732642'));


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(array10.filter((value) => value.id % 2 === 0));


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(array10.sort((a, b) => b.id - a.id));


// - створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client{
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name= name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let array = [];
array.push(new Client(12789021, 'Anna', 'Maziarko', 'annaM@gmail.com', '+0987656442', ['smartphone', 'headphones']));
array.push(new Client(13416890, 'Marta', 'Cheriachenko', 'martochkaC@gmail.com', '+0983456402', ['bread', 'tomato', 'cheese']));
array.push(new Client(23146789, 'Luka', 'Shurkovych', 'ShurkovychLuka@gmail.com', '+0989732642',['noodles', 'spaghetti', 'chicken']));
array.push(new Client(90087640, 'Anatoliy', 'Zhydenko', 'anatoliyZhyd@gmail.com', '+0633456487', ['bed', 'pillow']));
array.push(new Client(45612890, 'Petro', 'Kotenko', 'petryk178@gmail.com', '+0687656442', ['book', 'pen', 'rubber']));
array.push(new Client(45279012, 'Anastasiia', 'Sonechko', 'anastasiikas@gmail.com', '+0687631442', ['pan', 'saucepan']));
array.push(new Client(38098712 , 'Maria', 'Vydelko', 'vydelec@gmail.com', '+0502366442', ['paint', 'brush']));
array.push(new Client(25167840, 'Ivan', 'Udud', 'UdudIvanko@gmail.com', '+0507656456', ['T-shirt', 'skirt', 'briefcase']));
array.push(new Client(18976520, 'Mykola', 'Antonovych', 'MykaAnton@gmail.com', '+0997656890', ['pizza', 'coca-cola']));
array.push(new Client(56734521, 'Emilia', 'Bandera', 'emilka_flower@gmail.com', '+0988456442', ['sushi']))


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(array.sort((client1, client2) => client1.order.length - client2.order.length))


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, max_speed, engine_volume){
    this.model = model;
    this.manufecturer = manufacturer;
    this.year = year;
    this.max_speed = max_speed;
    this.engine_volume = engine_volume;
}
Car.prototype.drive = function(){
    console.log(`їдемо зі швидкістю ${this.max_speed} км на годину`)
}
Car.prototype.info = function(){
    console.log(`модель - ${this.model} \nвиробник - ${this.manufecturer} \nрік випуску - ${this.year}\nмаксимальна швидкість - ${this.max_speed}\nоб'єм двигуна - ${this.engine_volume}`)
}
Car.prototype.info2 = function() {
    for (let key in this) {
         if(this.hasOwnProperty(key) && key !== 'function'){
             console.log(`${key} - ${this[key]}`);
         }
    }
}
Car.prototype.increaseMaxSpeed = function(newSpeed){
    this.max_speed += newSpeed;
}
Car.prototype.changeYear = function(newValue){
    this.year = newValue;
}
Car.prototype.addDriver= function(driver){
    this.driver = driver;
}


let car = new Car('A6','audi', 2017, 240, 7 );
car.drive();
car.info();
car.info2();
car.increaseMaxSpeed(60);
car.changeYear(2020);
car.addDriver({name: 'Petro', age:45, experience:25})
car.info();
car.info2();



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2{
    constructor(model, manufacturer, year, max_speed, engine_volume){
        this.model = model;
        this.manufecturer = manufacturer;
        this.year = year;
        this.max_speed = max_speed;
        this.engine_volume = engine_volume;
    }
    drive(){
        console.log(`їдемо зі швидкістю ${this.max_speed} км на годину`)
    }
    info(){
        console.log(`модель - ${this.model} \nвиробник - ${this.manufecturer} \nрік випуску - ${this.year}\nмаксимальна швидкість - ${this.max_speed}\nоб'єм двигуна - ${this.engine_volume}`)
    }
    increaseMaxSpeed(newSpeed){
        this.max_speed += newSpeed;
    }
    changeYear(newValue){
        this.year = newValue;
    }
    addDriver(driver) {
        this.driver = driver;
    }
}

let car_class = new Car2('Fabia','Škoda', 2010, 200, 5);
car_class.info();
car_class.addDriver({name: 'Petro', age:45, experience:25});
car_class.increaseMaxSpeed(30);
car_class.drive();
car_class.changeYear(2024);


// -створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella{
    constructor(name, age, foot_size){
        this.name = name;
        this.age = age;
        this.footsize = foot_size;
    }
}

let cinderellas = [
    new Cinderella('Amy', 18, 39),
    new Cinderella('Kira', 17, 40),
    new Cinderella('Lily', 19, 37),
    new Cinderella('Amelia', 20, 38),
    new Cinderella('Anastasiia', 16, 41),
    new Cinderella('Eva', 19, 40),
    new Cinderella('Maria', 18, 36),
    new Cinderella('Anna', 22, 38),
    new Cinderella('Isabella', 18, 40),
    new Cinderella('Sophia', 36, 38),
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name, age, slipper){
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

let prince = new Prince('Oleksandr',20, 41);


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for(let cinderella of cinderellas){
    if(cinderella.footsize===prince.slipper){
        console.log(`${cinderella.name} віком ${cinderella.age} і з розміром ноги ${cinderella.footsize} Повинна бути з принцом`);
        break;
    }
}


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(cinderellas.find(value => value.footsize === prince.slipper));
