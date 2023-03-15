// Задание 1

// function number(a, b) {
//     a = Number(prompt(`Введите 1-ое число`));
//     b = Number(prompt(`Введите 2-ое число`));
//     if (a >= b) {
//         return a;
//     } else if (a <= b) {
//         return b;
//     } else {
//         alert(`Указано некорректное значение`);
//     }
// }

// console.log(number());

//Задание 2

// let evenNumber = () => {
//     evenNumber = Number(prompt(`Введите любое число`)) % 2;
//     if (evenNumber === 0) {
//         return (`Число чётное`);
//     } else if (evenNumber === 1) {
//         return (`Число нечётное`);
//     }
// }
// console.log(evenNumber());

//Задание 3.1

// function squareNumberOne(a) {
//     a = Number(prompt(`Введите любое число`));
//     console.log(a ** 2);
// }

// squareNumberOne();


//Задание 3.2
// function squareNumberTwo(a) {
//     a = Number(prompt(`Введите любое число`));
//     return a ** 2;
// }
// squareNumberTwo();

// Задание 4

// let age = () => {
//     age = Number(prompt(`Укажите ваш возраст`));
//     if (age < 0) {
//         alert(`Вы ввели неправильное значение`);

//     } else if (age <= 12) {
//         alert(`Привет, друг!`)

//     } else if (age >= 13) {
//         alert(`Добро пожаловать!`)
//     }
// }

// age();

// Задание 5

// let numberAddition = (a, b) => {
//     a = Number(prompt(`Введите 1-ое число`))
//     b = Number(prompt(`Введите 2-ое число`))

//     numberAddition = (isNaN(a + b));

//     numberAddition ? alert(`Одно или оба значения не являются числом`) : alert(a + b);

// }
// numberAddition();

//Задание 6

// let cubeNumber = (userNumber, checkNumber) => {
//     userNumber = Number(prompt(`Введите любое число`));
//     checkNumber = (isNaN(userNumber));
//     cubeNumber = userNumber ** 3;
//     return checkNumber ? alert(`Переданный параметр не является числом`) : alert(`${userNumber} в кубе равняется ${cubeNumber}`);

// }

// cubeNumber();

//Задание 7

// const circle1 = {
//     radius: 20,
//     getArea: getCircleArea,
//     getPerimetr: getCirclePerimetr,
// }

// const circle2 = {
//     radius: 5,
//     getArea: getCircleArea,
//     getPerimetr: getCirclePerimetr,
// }

// function getCircleArea() {
//     return (2 * 3.14 * this.radius);
// }

// function getCirclePerimetr() {
//     return (this.radius ** 2 * 3.14);
// }

// console.log(`Площадь первого круга ${circle1.getArea()}, периметр первого круга ${circle1.getPerimetr()}. `);
// console.log(`Площадь второго круга ${circle2.getArea()}, периметр второго круга ${circle2.getPerimetr()}. `);

//Задание 8

function monthNumber() {
    let monthNumber;
    monthNumber = prompt(`Привет! Давай поиграем. Введи любой номер месяца`);

    if (monthNumber >= 1 && monthNumber <= 2 || monthNumber == 12) {
        return console.log(`Этот месяц относится к сезону "Зима"`);
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        return console.log(`Этот месяц относится к сезону "Весна"`);
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        return console.log(`Этот месяц относится к сезону "Лето"`);
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        return console.log(`Этот месяц относится к сезону "Осень"`);
    } else {
        return console.log(`Такого месяца не существует. Попробуй ещё раз!`);
    }
}