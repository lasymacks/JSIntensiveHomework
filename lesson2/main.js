function makeObjectDeepCopy(obj) {
    const copy = {};
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            copy[key] = makeObjectDeepCopy(obj[key]);
        } else {
            copy[key] = obj[key];
        }
    }
    return copy;
}



function selectFromInterval(NumbersArr, startNum, endNum) {
    if (Array.isArray(NumbersArr)) {
        NumbersArr.forEach(elem => {
            if (typeof(elem) !== 'number') {
                throw new Error('Ошибка!');
            }
        })
        if (typeof(startNum) !== 'number' || typeof(endNum) !== 'number') {
            throw new Error('Ошибка!');
        }
        if (startNum > endNum) {
            [startNum, endNum] = [endNum, startNum];
        }
        const resultArr = NumbersArr.filter(item => item >= startNum && item <= endNum);
        return resultArr;
    } else {
        throw new Error('Ошибка!');
    }
}



const myIterable = {from: 1, to: 4};

myIterable[Symbol.iterator] = function() {
    if (this.from === null || this.to === null) {
        throw new Error('Ошибка!');
    }
    if (typeof(this.from) !== 'number' || typeof(this.to) !== 'number') {
        throw new Error('Ошибка!');
    } 
    if (this.from > this.to) {
        throw new Error('Ошибка!');
    } else {
        return {
            current: this.from,
            last: this.to,
            next() {
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        };
    }
};