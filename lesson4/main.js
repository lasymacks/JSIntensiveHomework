function concatStrings(string, separator) {
    let result = string;
    const sum = (arg) => {
        if (arg || arg === '') {
            if (typeof(arg) === 'string') {
                typeof(separator) === 'string' ? result += separator + arg : result += arg;
                return sum;
            } else {
                return result;
            }
        } else {
            return result;
        }
    }
    return sum;
}



class Calculator {
    
    constructor(first, second) {
        if (first == null || Number.isNaN(first)) {
            throw new Error('Enter a valid number');
        }
        if (typeof(first) !== 'number' || Number.isNaN(first)) {
            throw new Error('Not a number');
        }
        if (first ===Infinity || first === -Infinity) {
            throw new Error('Not a number');
        }
        if (second == null || Number.isNaN(second)) {
            throw new Error('Enter a valid number');
        }
        if (typeof(second) !== 'number' || Number.isNaN(first)) {
            throw new Error('Not a number');
        }
        if (second === Infinity || second === -Infinity) {
            throw new Error('Not a number');
        }
        this.first = first;
        this.second = second;
    }

    setX = (num) => {
        if (!num || num === Infinity || num === -Infinity) {
            throw new Error('Add corrected param');
        }
        if (typeof(num) !== 'number') {
            throw new Error('Add corrected param');
        }
        console.log(this.first = num);
    }
    setY = (num) => {
        if (!num || num === Infinity || num === -Infinity) {
            throw new Error('Add corrected param');
        }
        if (typeof(num) !== 'number') {
            throw new Error('Add corrected param');
        }
        console.log(this.second = num);
    }
    logSum = () => {
        console.log(this.first + this.second);
    }
    logMul = () => {
        console.log(this.first * this.second);
    }
    logSub = () => {
        console.log(this.first - this.second);
    }
    logDiv = () => {
        if (this.second === 0) {
            throw new Error('Сannot be divisible by 0');
        }
        console.log(this.first / this.second);
    }

}
