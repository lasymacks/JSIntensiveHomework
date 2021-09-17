class Stack {

    constructor(length) {
        if (length || length === 0) {
            this.length = length;
        } else {
            this.length = 10;
        }
        this.next = null;
        this.head = null;
        this.count = 0;
        this.number = 0;
        this.repository = {value: null};
    }

    push(elem) {
        if (!elem) {
            throw new Error('No value');
        }
        if (this.number === this.length) {
            throw new Error('Maximum stack length reached');
        }
        const call = (repository, n) => {
            if (this.number === 0) {
                this.repository.value = elem;
                this.repository.next = {};
                this.number += 1;
                this.head = elem;
                return this.repository.value;
            }
            if (this.count < this.number) {
                this.count += 1;
                return call(repository.next, this.count);
            } else {
                repository.value = elem;
                repository.next = {};
                this.number += 1;
                this.count = 0;
                this.head = elem;
                return elem;
            }
        }
        return call(this.repository, this.count);
    }

    pop() {
        if (this.number === 0) {
            throw new Error('Stack is empty');
        }
        const call = (repository, n) => {
            if (this.number === 1) {
                this.number -= 1;
                return this.repository = {value: null};
            }
            if ((this.count + 2) < this.number) {
                this.count += 1;
                return call(repository.next, this.count);
            } else {
                let current = repository.next.value;
                repository.next = {};
                this.number -= 1;
                this.head = repository.value;
                this.count = 0;
                return current;
            }
        }
        return call(this.repository, this.count);
    }

    peek() {
        if (this.number === 0) {
            return this.next;
        }
        return this.head;
    }

    isEmpty() {
        if (this.number === 0) {
            return true;
        } else {
            return false;
        }
    }

    toArray() {
        let array = [];
        if (this.number === 0) {
            return array;
        }
        const call = (repository, n) => {
            if (n < this.number) {
                array.push(repository.value);
                this.count += 1;
                return call(repository.next, this.count)
            } else {
                return array;
            }
        }
        return call(this.repository, this.count);
    }

    fromIterable(iterable) {
        if (iterable[Symbol.iterator]) {
            const callbackStack = new Stack(iterable.length);
        for (let i of iterable) {
            callbackStack.push(i);
        }
        return callbackStack;
        } else {
            throw new Error('Entity is not iterable');
        }
    }
}

module.exports = { Stack };
