Array.prototype.myFilter = function(callback, thisArg) {
    if (this == null) {
        throw new Error("Cant iterate undefined or null");
    };
    if (typeof callback !== "function") {
        throw new Error("Callback is not a function");
    };
    let arg = this;
    if (arguments.length > 1) {
        arg = thisArg;
    }
    let objThis = Object(this);
    let result = [];
    for (let i = 0; i < objThis.length; i++) {
        if (i in objThis) {
            if (callback.call(arg, objThis[i], i, objThis)) {
                result.push(objThis[i]);
            }
        }  
    }
    return result;
}



function createDebounceFunction(callback, delay) {
    let timer = false;
    return function() {
        if (timer) {
            clearTimeout(timer);
            timer = false;
        }
        timer = setTimeout(() => {
            callback();
            timer = false
        }, delay);
    };
}
