//Задание 1

function numbersSum(a, b) {
    return a + b
}

function numbersMult(a, b) {
    return a * b
}

function numbersArray(arrNum, callback) {
    let result = arrNum.reduce(callback)
    return result;
}

console.log(numbersArray([2, 5, 7, 9, 15], numbersSum));
console.log(numbersArray([2, 5, 7, 9, 15], numbersMult));


//Задание 2

function sortAgeUser(a, b) {
    if (a.age < b.age) return -1;
    if (a.age > b.age) return 2;
}

const users = [
    { name: 'Jon', age: 22 },
    { name: 'Richard', age: 18 },
    { name: 'Anton', age: 32 },
    { name: 'Lida', age: 23 },
    { name: 'Bob', age: 44 }
];

console.log(users.sort(sortAgeUser));


//Задание 3

function reverseArr(a) {
    return a.reverse()
}

function toNumberArr(a) {
    return (a.map(Number)).filter(item => isNaN(item) === false)
}

function each(callback) {
    arr = [1, '4', 9, 'two'];
    return callback(arr)
}
console.log(each(reverseArr));

//Задание 3.2
function eachTwo(callback) {
    arr = [1, '4', false, 9, 'two'];
    return callback(arr)
}
console.log(eachTwo(toNumberArr));

//Задание 4

const currentDate = (date) => {
    date = new Date()

    const idInterval = setInterval(() => {
        date = new Date()
        console.log(date);
    }, 3000)

    setTimeout(() => {
        clearInterval(idInterval);
        console.log(`30 секунд прошло`);
    }, 30000)

    return date;
}

console.log(currentDate());

//Задание 5

function calling() {
    console.log('Звоню!')
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...')
        callback()
    }, 1000);
}

function talk() {
    console.log('Разговор')
}

calling();
beeps(talk);

