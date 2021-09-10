Array.prototype.myFilter = function(callback, thisArg) {
    let result = [];
        this.forEach(function(current, index, arr) {
        if(callback.call(thisArg, current, index, arr)) {
           result.push(current);
        }
        return result;
    });
    return result;
};



function createDebounceFunction(callback, delay) {
    let timer = false;
    return function() {
        if (timer) {
            clearTimeout(timer);
            timer = false;
        }
        const fnCall = () => { callback.call(this, ...theArgs) }
        timer = setTimeout(() => {
            timer = setTimeout(fnCall, delay);
            timer = false;
        }, delay);
    };
}


