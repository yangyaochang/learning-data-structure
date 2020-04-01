//Implementing an array with JavaScript

class MyArray {
    constructor() {
        this.data = {}
        this.length = 0
    }

    push(item) {
        this.data[this.length] = item
        this.length++
    }

    pop() {
        delete this.data[this.length - 1]
        this.length--
    }

    get(index) {
        return this.data[index]
    }

    delete(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }

        delete this.data[this.length - 1]
        this.length--
    }
}
