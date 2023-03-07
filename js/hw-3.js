/*
//Задание 1
let password = `krutoyparol`;
let userPassword = String(prompt(`Введите пароль`));

(password === userPassword) ? alert(`Пароль введен верно`) : alert(`Пароль введен неправильно`);

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
let monthNumber = String(prompt(`Введите номер месяца`));

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
*/

//ДОП. Задание 7
let userNumber = Number(prompt(`Пожалуйста, введите любое число`));

alert(isNaN(userNumber));
