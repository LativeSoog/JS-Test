//Задача 1
let a = 10;
alert(a);
a = 20;
alert(a);

//Задача 2
let yearFirstIphone = 2007
alert(yearFirstIphone);

//Задача 3
let nameCreatorJs = 'Брендан Айком';
alert(nameCreatorJs);

//Задача 4
let b = 10;
let c = 2;
alert(b + c);
alert(b - c);
alert(b * c);
alert(b / c);

//Задача 5
let d = 2;
let result = (d ** 5);
alert(result);

//Задача 6
let e = 9;
let f = 2;
let resultDivision = (e % f);
alert(resultDivision);

//Задача 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//Задача 8
let age = String(prompt(`Сколько вам лет?`));
alert(`Вам ${age} лет`);

//Задача 9
let user = {
    name: String("Vitaliy"),
    age: Number(20),
    isAdmin: Boolean(1),
};
user["city of residence"] = "Astana";
user["age"] = 24;
delete user["city of residence"];
let info = String(prompt(`Какую информацию хотите узнать о пользователе?`));
alert(user[info]);

//Задача 10
let nameUser = String(prompt(`Укажите ваше имя`));
alert(`Привет, ${nameUser}!`);