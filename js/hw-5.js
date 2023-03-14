//Задание 1

// function numbers(oneNumbers, twoNumbers) {
//     oneNumbers = Number(prompt(`Введите 1-ое число`));
//     twoNumbers = Number(prompt(`Введите 2-ое число`));
//     if (oneNumbers >= twoNumbers) {
//         alert(oneNumbers);
//     } else if (twoNumbers >= oneNumbers) {
//         alert(twoNumbers)
//     } else {
//         alert(`Указанные значения некорректны`);
//     }
// }

//numbers();

// Задание 2

let evenNumber = () => Number(prompt(`Введите любое число`)) % 2;

if (evenNumber > 3) {
    alert(`Больше трех`);
} else {
    alert(`Меньше трех`);
}

evenNumber();