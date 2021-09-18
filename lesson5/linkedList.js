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

module.exports = { LinkedList };