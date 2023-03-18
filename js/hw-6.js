//Задание 1

const arrOne = [1, 5, 4, 10, 0, 3];

for (let a = 0; a < arrOne.length; a++) {
    if (arrOne[a] === 10) break;

}

//Задание 2

const arrTwo = [1, 5, 4, 10, 0, 3];

arrTwo.forEach((element, index) => {
    if (element === 4) {
        console.log(`У элемента ${element} позиция №${index}`);
    }
})

//Задание 3

const arrThree = [1, 3, 5, 10, 20];
let arrThreeSpace;

arrThreeSpace = arrThree.join(' ');

console.log(arrThreeSpace);

//Задание 4

let arrFour = [];

for (let a = 0; a < 3; a++) {
    arrFour[a] = []
    for (let b = 0; b < 3; b++)
        arrFour[a].push(1)
}

console.log(arrFour);

//Задание 5

let arrFive = [1, 1, 1];
arrFive = arrFive.concat(2, 2, 2);

console.log(arrFive);

//Задание 6

const arrSix = [9, 8, 7, 'a', 6, 5];

arrSix.sort();
arrSix.pop();

console.log(arrSix);

//Задание 7

const arrSeven = [9, 8, 7, 6, 5, 5];
let userNum = Number(prompt(`Введите число`))

arrSeven.forEach((arrEl) => {
    if (arrEl === userNum) {
        console.log(`Введеное значение найдено`);
    }
})

//Задание 8

let text = 'abcdef';

text = text.split('');
text = text.reverse();
text = text.join('')

console.log(text);


//Задание 9

let arrNine = [[1, 2, 3], [4, 5, 6]];
arrNine = [].concat(...arrNine);
console.log(arrNine);

//Задание 10

const arrTen = [2, 4, 1, 5, 9];
let arrTenResult = 0;

for (let a = 0; a < arrTen.length; a++) {
    arrTenResult += arrTen[a];
    if (arrTen[a] < 9) {
        console.log(`Текущая сумма: ${arrTenResult}, следующая сумма: ${arrTenResult + arrTen[a + 1]}`);
    } else if (arrTen[a] === 9) {
        console.log(`Текущая сумма: ${arrTenResult}`);
    }

}

//Задание 11

function arrQuad(arrEleven) {
    return arrEleven.map(arrElement => arrElement ** 2);
}

console.log(arrQuad([2, 8, 4, 5, 9]));

//Задание 12

const getLengthWords = (arrTwelve) => {
    return arrTwelve.map(arrElement => arrElement.length)
}
console.log(getLengthWords([`Hello`, `My`, `name is Vitaliy`, `G`]));

//Задание 13

const negativeNum = (arrThirteen) => {
    return arrThirteen.filter(arrElement => arrElement < 0)
}

console.log(negativeNum([1, 5, -3, -4, 2, -20, 2, 4, -9]));