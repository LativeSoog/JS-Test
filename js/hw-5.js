// Задание 1

function smallNumber(a, b) {
    if (a >= b) {
        return a;
    } else if (a <= a) {
        return b;
    } else {
        return (`Указано некорректное значение`);
    }
}

console.log(smallNumber(Number(prompt(`Введите 1-ое число`)), Number(prompt(`Введите 2-ое число`))));


// //Задание 2

let evenNumber = (a) => {
    if (a === 0) {
        return (`Число чётное`);
    } else if (a === 1) {
        return (`Число нечётное`)
    } else {
        return (`Указано некорректное значение`)
    }
}

console.log(evenNumber(Number(prompt(`Введите любое число`)) % 2));

//Задание 3.1

function squareNumberOne(a) {
    return a;
}

console.log(squareNumberOne(Number(prompt(`Введите любое число`)) ** 2));

//Задание 3.2
function squareNumberTwo(a) {
    return a ** 2;
}

console.log(squareNumberTwo(Number(prompt(`Введите любое число`))));

// Задание 4

let age = (userAge) => {
    if (userAge < 0) {
        return (`Вы ввели неправильное значение`)
    } else if (userAge <= 12) {
        return (`Привет, друг!`)
    } else if (userAge >= 13) {
        return (`Добро пожаловать!`)
    }
}

console.log(age(Number(prompt(`Введите ваш возраст`))));


// Задание 5

let numberAddition = (a, b) => {
    let checkNumber = (isNaN(a + b));
    if (checkNumber === true) {
        return (`Одно или оба значения не являются числом`)
    } else {
        return (a + b)
    }
}

console.log(numberAddition(Number(prompt(`Введите 1-ое значение`)), Number(prompt(`Введите 2-ое значение`))));


//Задание 6

function cubeNumber(userNumber, checkNumber) {
    checkNumber = (isNaN(userNumber));

    if (checkNumber === true) {
        return (`Переданный параметр не является числом`)
    } else {
        return (`${userNumber} в кубе равняется ${userNumber ** 3}`)
    }
}

console.log(cubeNumber(Number(prompt(`Введите любое число`))));

//Задание 7

const circle1 = {
    radius: 20,
    getArea: getCircleArea,
    getPerimetr: getCirclePerimetr,
}

const circle2 = {
    radius: 5,
    getArea: getCircleArea,
    getPerimetr: getCirclePerimetr,
}

function getCircleArea() {
    return (2 * 3.14 * this.radius);
}

function getCirclePerimetr() {
    return (this.radius ** 2 * 3.14);
}

console.log(`Площадь первого круга ${circle1.getArea()}, периметр первого круга ${circle1.getPerimetr()}. `);
console.log(`Площадь второго круга ${circle2.getArea()}, периметр второго круга ${circle2.getPerimetr()}. `);

//Задание 8

function monthNumber(monthNumberClick) {
    monthNumberUser = prompt(`Привет! Давай поиграем. Введи любой номер месяца`);

    if (monthNumberUser >= 1 && monthNumberUser <= 2 || monthNumberUser == 12) {
        return console.log(`Этот месяц относится к сезону "Зима"`);
    } else if (monthNumberUser >= 3 && monthNumberUser <= 5) {
        return console.log(`Этот месяц относится к сезону "Весна"`);
    } else if (monthNumberUser >= 6 && monthNumberUser <= 8) {
        return console.log(`Этот месяц относится к сезону "Лето"`);
    } else if (monthNumberUser >= 9 && monthNumberUser <= 11) {
        return console.log(`Этот месяц относится к сезону "Осень"`);
    } else {
        return console.log(`Такого месяца не существует. Попробуй ещё раз!`);
    }
}