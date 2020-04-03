//Implementing a stack with JavaScript

// Using a array to build a stack
class Stack {
    constructor() {
        this.data = []
    }

    peek() {
        return this.data[this.data.length - 1]
    }

    push(value) {
        this.data.push(value)
        return this
    }

    pop() {
        return this.data.pop()
    }
}

const myStack = new Stack();
console.log(myStack.peek())
console.log(myStack.push('google'))
console.log(myStack.push('udemy'))
console.log(myStack.push('discord'))
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())








