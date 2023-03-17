// Задание 1 - ПОДУМАТЬ

let arrOne = [1, 5, 4, 10, 0, 3];

for (let a = 0; a < arrOne.length; a++) {
    if (arrOne[a] == 10) break;
    console.log(arrOne[a]);
}

// Задание 2

let arrTwo = [1, 5, 4, 10, 0, 3];

arrTwo.forEach((element, index) => {
    if (element == 4) {
        console.log(`Элемент ${element} занимает позицию ${index}`);
    }
})

// Задание 3
let arrThree = [1, 3, 5, 10, 20];
arrThree = arrThree.join(' ');
console.log(arrThree);

// Задание 4

// Задание 5
let arrFive = [1, 1, 1];
arrFive = arrFive.concat(2, 2, 2);
console.log(arrFive);

// Задание 6
let arrSix = [9, 8, 7, 'a', 6, 5];
arrSix = arrSix.sort();
arrSix.pop();
console.log(arrSix);

// Задание 7
let arrSeven = [9, 8, 7, 6, 5];

// Задание 8
let stringText = 'abcdef';
stringText = stringText.split('');
stringText = stringText.reverse();
stringText = stringText.join('')
console.log(stringText);

//Задание 9

//Задание 10

//Задание 11
function quadrateArr(arr, arrQuadrate) {
    arrQuadrate = arr.map(element => element ** 2);
    return arrQuadrate;
}
console.log(quadrateArr([2, 3, 4]));

