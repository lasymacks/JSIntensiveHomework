const numbersConverter = () => {
    const num = prompt('Введите число');
    const system = prompt('Укажите систему исчисления');
    if (isNaN(Number(num))) {
        alert('Некорректный ввод');
    } else if (isNaN(Number(system))) {
        alert('Некорректный ввод');
    } else {
        console.log(Number(num).toString(system));
    }
};
numbersConverter();
