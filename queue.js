//Implementing a queue with JavaScript

class Queue {
    constructor() {
        this.first = []
        this.last = []
    }

    enqueue(value) {
        const length = this.first.length
        for (let i = 0; i < length; i++) {
            this.last.push(this.first.pop())
        }
        this.last.push(value)
        return this
    }

    dequeue() {
        const length = this.last.length
        for (let i = 0; i < length; i++) {
            this.first.push(this.last.pop())
        }
        this.first.pop()
        return this
    }

    peek() {
        return (this.last.length > 0) ? this.last[0] : this.first[this.first.length - 1]
    }
}

const myQueue = new Queue()
console.log(myQueue.peek())
console.log(myQueue.enqueue('Joy'))
console.log(myQueue.enqueue('Matt'))
console.log(myQueue.enqueue('Pavel'))
console.log(myQueue.peek())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.peek())
