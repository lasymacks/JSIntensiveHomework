// class Stack {

//     constructor(length) {
//         if (length || length === 0) {
//             this.length = length;
//         }
//         else this.length = 10;

//         this.repository = {value: null};
//         this.next = null;

//         this.topElem = null;
//         this.count = 0;
//         this.size = 0;
        
//     }

//     push(elem) {
//         if (this.size === this.length) {
//             throw new Error('Maximum stack length reached');
//         }
//         const iteration = (repository) => {
//             if (this.size === 0) {
//                 this.repository.value = elem;
//                 this.repository.next = {};

//                 this.size += 1;
//                 this.topElem = elem;
//                 return this.repository.value;
//             }
//             if (this.count < this.size) {
//                 this.count += 1;
//                 return iteration(repository.next);
//             } else {
//                 repository.value = elem; 
//                 repository.next = {};
//                 this.size += 1;
//                 this.count = 0;
//                 this.topElem = elem;
//                 return elem;
//             }
//         }
//         return iteration(this.repository);
//     }

//     pop() {
//         if (this.size === 0) {
//             throw new Error('Stack is empty');
//         }
//         const iteration = (repository) => {
//             if (this.size === 1) {
//                 this.size -= 1;
//                 return this.repository = {value: null};
//             }
//             if ((this.count + 2) < this.size) {
//                 this.count += 1;
//                 return iteration(repository.next);
//             } else {
//                 const current = repository.next.value;
//                 repository.next = {};
//                 this.size -= 1;
//                 this.topElem = repository.value;
//                 this.count = 0;
//                 return current;
//             }
//         }
//         return iteration(this.repository);
//     }

//     peek() {
//         if (this.size === 0) {
//             return this.next;
//         } else {
//             return this.topElem;
//         }
//     }

//     isEmpty() {
//         if (this.size === 0) {
//             return true;
//         }
//         return false;
//     }

//     toArray() {
//         let array = [];
//         if (this.size === 0) {
//             return array;
//         }
//         const iteration = (repository) => {
//             if (this.count < this.size) {
//                 array.push(repository.value);
//                 this.count += 1;
//                 return iteration(repository.next)
//             } else {
//                 this.count = 0;
//                 return array;
//             }
//         }
//         return iteration(this.repository);
//     }

//     fromIterable(iterable) {
//         if (iterable[Symbol.iterator]) {
//             const callbackStack = new Stack(iterable.length);
//             for (let i of iterable) {
//                 callbackStack.push(i);
//             }
//             return callbackStack;
//         }
//         throw new Error('Entity is not iterable');
//     }
// }


class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
    }
}
class Element {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
LinkedList.prototype.append = function(value) {
    const newElem = new Element(value);
    if (!this.first || !this.last) {
        this.first = newElem;
        this.last = newElem;
        return this.first.value;
    }
    this.last.next = newElem;
    this.last = newElem;
    return this.last.value;
}
LinkedList.prototype.prepend = function(value) {
    const newElem = new Element(value, this.first);
    this.first = newElem;
    if (!this.last) {
        this.last = newElem;
        return this.first.value;
    }
    return this.first.value;
}
LinkedList.prototype.find = function(value) {
    if (!this.first) return null;
    const newElem = new Element(value);
    let current = this.first;
    while (current.next) {
        if (value !== undefined && current.value === value) {
            return current.value;
        }
        current = current.next;
    }
    return null;
}
LinkedList.prototype.toArray = function(value) {
    let array = [];
    let current = this.first;
    while (current) {
        array.push(current.value);
        current = current.next;
    }
    return array;
}
LinkedList.prototype.fromIterable = function(iterable) {
    if (iterable[Symbol.iterator]) {
        const callback = new LinkedList;
        for (let item of iterable) { 
            callback.append(item);
        }
        return callback;
    }
    throw new Error('Entity is not iterable');
}


const list = new LinkedList;

console.log(list.append('1'));
console.log(list.append('2'));
console.log(list.append('3'));
console.log(list.append('4'));
console.log(list.append('5'));
console.log(list.prepend('0'));
console.log(list.prepend('-1'));
console.log(list);
console.log(list.find('2'));
console.log(list.toArray());
console.log(list.fromIterable([8,9,7]));


// module.exports = { LinkedList };