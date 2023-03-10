
// Задание 1

let helloNumber = 1;

while (helloNumber <= 2) {
    alert(`Привет!`);
    helloNumber++;
}

// Задание 2

let a = 1;

while (a <= 5) {
    console.log(a);
    a++;
}

//Задание 3

let b = 7;
while (b <= 22) {
    console.log(b);
    b++;
}

//Задание 4

const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
};

for (let salaryPerson in obj) {
    console.log(`${salaryPerson} - зарплата ${obj[salaryPerson]} долларов`);
}

//Задание 5

let num = 0;

for (let n = 1000; n >= 50; num++) {
    n /= 2;
    console.log(n);
    console.log(num);
}

// Задание 6

const firstFridayMonth = 5;

for (let toDay = firstFridayMonth; toDay < 31; toDay += 7) {
    console.log(`Сегодня пятница, ${toDay}-е число. Необходимо подготовить отчёт.`);
}