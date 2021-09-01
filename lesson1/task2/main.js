let primitiveCalculator = (num1, num2) => {
    result = isNaN(Number(num1)) ? alert('Некорректный ввод') : 
    isNaN(Number(num2)) ? alert('Некорректный ввод') : console.log(Number(num1) + Number(num2), num1 / num2);
};
primitiveCalculator(number1 = prompt('Введите первое число'), number2 = prompt('Введите второе число'));
