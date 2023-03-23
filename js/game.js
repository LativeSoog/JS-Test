//Игра "Времена года"
function monthNumber() {
    monthNumberUser = prompt(`Привет! Давай поиграем. Введи любой номер месяца`);

    if (monthNumberUser >= 1 && monthNumberUser <= 2 || monthNumberUser == 12) {
        alert(`Этот месяц относится к сезону "Зима"`);
    } else if (monthNumberUser >= 3 && monthNumberUser <= 5) {
        alert(`Этот месяц относится к сезону "Весна"`);
    } else if (monthNumberUser >= 6 && monthNumberUser <= 8) {
        alert(`Этот месяц относится к сезону "Лето"`);
    } else if (monthNumberUser >= 9 && monthNumberUser <= 11) {
        alert(`Этот месяц относится к сезону "Осень"`);
    } else {
        alert(`Такого месяца не существует. Попробуй ещё раз!`);
    }
}

//Игра "Запомни слова"
function gameWord() {
    alert(`Привет! Сейчас вам будут показан набор слов, постарайтесь их запомнить :)`)

    let rememberWord = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    rememberWord = rememberWord.sort(() => Math.random() - 0.5)
    alert(rememberWord);

    for (let a = 0; a < rememberWord.length; a++) {
        rememberWord[a] = rememberWord[a].toLocaleLowerCase()
    }

    let oneWord = prompt(`Какое было первое слово?`).toLowerCase();
    let twoWord = prompt(`Какое было последнее слово?`).toLowerCase();

    if (rememberWord[0] === oneWord && rememberWord[6] === twoWord) {
        alert(`Поздравляем! Вы угадали оба слова!`)
    } else if (rememberWord[0] === oneWord || rememberWord[6] === twoWord) {
        alert(`Вы были близки к победе`)
    } else {
        alert(`Ваш ответ неверный :(`)
    }
}