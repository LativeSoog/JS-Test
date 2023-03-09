//Задание 1
let password = `krutoyparol`;
let userPassword = String(prompt(`Введите пароль`));

alert(password === userPassword ? `Пароль введен верно` : `Пароль введен неправильно`)

//Задание 2
let c = 70;

(c > 0 && c < 10) ? console.log(`Верно`) : console.log(`Неверно`);

c = 0;

(c >= 0 && c < 10) ? console.log(`Верно`) : console.log(`Неверно`);

c = 10;

(c > 0 && c <= 10) ? console.log(`Верно`) : console.log(`Неверно`);

c = -3;

(c > 0 && c < 10) ? console.log(`Верно`) : console.log(`Неверно`);

c = 2;

(c > 0 && c < 10) ? console.log(`Верно`) : console.log(`Неверно`);


// Задание 3
let d = 150;
let e = 20;

if (d > 100 || e > 100) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
}


//Задание 4
let a = Number('2');
let b = Number('3');
alert(a + b);

//Задание 5
let monthNumber = prompt(`Введите номер месяца`);

switch (monthNumber) {
    case `1`:
    case `2`:
    case `12`:
        alert(`Этот месяц относится к сезону "Зима"`)
        break;

    case `3`:
    case `4`:
    case `5`:
        alert(`Этот месяц относится к сезону "Весна"`)
        break;

    case `6`:
    case `7`:
    case `8`:
        alert(`Этот месяц относится к сезону "Лето"`)
        break;

    case `9`:
    case `10`:
    case `11`:
        alert(`Этот месяц относится к сезону "Осень"`)
        break;

    default:
        alert(`Такого месяца не существует`)
        break;
}


//ДОП. Задание 7
let userNumber = Number(prompt(`Пожалуйста, введите любое число`));

console.log(isNaN(userNumber));

let numberEven = (userNumber % 2);

if (numberEven === 0) {
    alert(`Число чётное`)
}
else {
    alert(`Число нечётное`)
};


//ДОП. Задание 8
let clientOS;

if (navigator.userAgentData.platform == "iOS") {
    clientOS = 0
}
else if (navigator.userAgentData.platform == "Android") {
    clientOS = 1
};

if (clientOS === 0) {
    console.log(`Установите версию приложения для iOS по ссылке`)
    alert(`Установите версию приложения для iOS по ссылке`)
}
else if (clientOS === 1) {
    console.log(`Установите версию приложения для Android по ссылке`);
    alert(`Установите версию приложения для Android по ссылке`)
}


//ДОП. Задание 9
let appClientOS;
let clientDeviceYear;

if (navigator.userAgentData.platform == "iOS") {
    appClientOS = 0
}
else if (navigator.userAgentData.platform == "Android") {
    appClientOS = 1
};

(appClientOS === 0 || appClientOS === 1) ? clientDeviceYear = Number(prompt(`Укажите год выпуска вашего телефона`)) : ("");


if (clientDeviceYear > 2014 && appClientOS === 0) {
    console.log(`Установите версию приложения для iOS по ссылке`)
    alert(`Установите версию приложения для iOS по ссылке`)
}

else if (clientDeviceYear < 2015 && appClientOS === 0) {
    console.log(`Установите облегченную версию приложения для iOS по ссылке`)
    alert(`Установите облегченную версию приложения для iOS по ссылке`)
}

else if (clientDeviceYear > 2014 && appClientOS === 1) {
    console.log(`Установите версию приложения для Android по ссылке`)
    alert(`Установите версию приложения для Android по ссылке`)
}

else if (clientDeviceYear < 2015 && appClientOS === 1) {
    console.log(`Установите облегченную версию приложения для Android по ссылке`)
    alert(`Установите облегченную версию приложения для Android по ссылке`)
};