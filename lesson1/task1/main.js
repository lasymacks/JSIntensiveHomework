let numbersConverter = (num, system) => {
    result = isNaN(Number(num)) ? alert('Некорректный ввод') : 
    isNaN(Number(system)) ? alert('Некорректный ввод') : console.log(Number(num).toString(system));
};
numbersConverter(number = prompt('Введите число'), numberSystem = prompt('Укажите в какую систему исчисления конвертировать'));
