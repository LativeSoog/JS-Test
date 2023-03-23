//Задание 1

let string = `js`;
string = string.toUpperCase();

console.log(string);

//Задание 2 - ДОДЕЛАТЬ!!!

let functionLine = (arrLine, line) => {
    let result = [];
    arrLine.forEach(arrEl => {
        if (arrEl.toLowerCase().includes(line.toLowerCase())) {
            result.push(arrEl)
        }
    });
    return result;
}

console.log(functionLine([`Вадим`, `Николай`, `Александр`, `Глеб`, `Владимир`, `Василий`, `Валерий`, `Максим`], `Ва`));

//Задание 3.1

let numOne = 32.58884;

console.log(Math.floor(numOne));

// Задание 3.2

console.log(Math.ceil(numOne));

// Задание 3.3

console.log(Math.round(numOne));

//Задание 4

let numTwo = [52, 53, 49, 77, 21, 32];
console.log(`Минимальное значение ${Math.min(...numTwo)}, максимальное значение ${Math.max(...numTwo)}`);

//Задание 5

let numThree = (numMin, numMax) => {
    return Math.round(Math.random() * (numMax - numMin)) + numMin
}

console.log(numThree(1, 10));

//Задание 6

function getWholeNum(num) {
    const arrNum = [...Array(num / 2)]

    for (let a = 0; a < arrNum.length; a += 1) {
        arrNum[a] = Math.round(Math.random() * num)
    }
    return arrNum
}

console.log(getWholeNum(10));

//Задание 7
let getRangeValue = (numOne, numTwo) => {
    return Math.round(Math.random() * (numTwo - numOne)) + numOne
}

console.log(getRandomValue(4, 15));

//Задание 8
let actualDate = new Date()
console.log(actualDate);

//Задание 9
let currentDate = new Date("23 March 2023");
currentDate.setDate(currentDate.getDate() + 73)

console.log(currentDate);

//Задание 10
let getDate = (date) => {
    const days = [`Воскресенье`, `Понедельник`, `Вторник`, `Среда`, `Четверг`, `Пятница`, `Суббота`];
    const months = [`Январь`, `Февраль`, `Март`, `Апрель`, `Май`, `Июнь`, `Июль`, `Август`, `Сентябрь`, `Октябрь`, `Ноябрь`, `Декабрь`];
    let minute = date.getMinutes()
    let second = date.getSeconds()

    if (minute < 10) {
        minute = "0" + minute
    };

    if (second < 10) {
        second = "0" + second
    }

    return date = `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}
    Время: ${date.getHours()}: ${minute}: ${second}`
}

console.log(getDate(new Date()));

