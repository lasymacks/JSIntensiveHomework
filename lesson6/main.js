button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('Microtask 1'));
    console.log('Listener 1');
});
    
button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('Microtask 2'));
    console.log('Listener 2');
});

//  В первом случае мы увидим в консоли следующее: 1) Listener 1; 2) Microtask 1; 3) Listener 2; 4) Microtask 2;
//  Такое поведение будет ожидаемым и предсказуемым, потому что по "событию" обработчик будет исполнять "слушатели" по очереди,
//  друг за другом, сверху вниз по коду. Так addEventListener работает по умолчанию, пока нынешняя callback функция не выполнится,
//  следующий "Listener" не будет исполнен. А уже внутри каждого обработчика будет выводиться сначала синхронный код(Listener),
//  а затем асинхронный(Microtask).

button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('Microtask 1'));
    console.log('Listener 1');
});
    
button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('Microtask 2'));
    console.log('Listener 2');
});

button.click();

// Примеры абсолютно идентичны по коду, но разные по способу вызова.
// Во втором случае мы увидим в консоли такой порядок: 1) Listener 1; 2) Listener 2; 3) Microtask 1; 4) Microtask 2;
// А произойдёт это из-за запуска функции "click()", дело в том, что при таком вызове в тело функции попадёт весь код
// из обработчиков. Если вывести команду "button.click" в консоль, то мы увидим "ƒ click() { [native code] }".
// То есть "click" у обьекта "button" является обычной функцией, в тело которой попадает всё содержимое handler из
// обьекта button.click. А сам handler является ссылкой на содержимое callback функции. Проше говоря, в "click" попадут 
// все callback функции из всех addEventListener что есть у этого обьекта. Именно поэтому содержимое всех наших "слушаетелей" 
// начнёт исполняться внутри одной функции, а значит внутри одной области видимости. Поэтому сначала будет исполнен весь 
// "синхронный" код(Listener1, Listener2), а затем асинхронный(Microtask1, Microtask2).