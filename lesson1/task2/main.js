const primitiveCalculator = () => {
    const num1 = prompt('Введите первое число');
    const num2 = prompt('Введите второе число');
    if (isNaN(Number(num1))) {
        alert('Некорректный ввод');
    } else if (isNaN(Number(num2))) {
        alert('Некорректный ввод');
    } else {
        console.log(Number(num1) + Number(num2), num1 / num2);
    }
};
primitiveCalculator();
