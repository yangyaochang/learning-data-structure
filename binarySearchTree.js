//Implementing a binary search tree with JavaScript

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            let currentNode = this.root
            while (true) {
                if (value > currentNode.value) {
                    if (currentNode.right === null) {
                        currentNode.right = newNode
                        return this
                    } else {
                        currentNode = currentNode.right
                    }
                } else if (value < currentNode.value) {
                    if (currentNode.left === null) {
                        currentNode.left = newNode
                        return this
                    } else {
                        currentNode = currentNode.left
                    }
                } else {
                    return this
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false
        } else {    
            let currentNode = this.root
            while (currentNode) {
                if (value <  currentNode.value) {
                    currentNode = currentNode.left
                } else if (value >  currentNode.value) {
                    currentNode = currentNode.right
                } else if (value ===  currentNode.value) {
                    return currentNode
                }
            }
            return null
        }
    }
}

let bst = new BinarySearchTree();
bst.insert(9)
bst.insert(4)
bst.insert(6)
bst.insert(20)
bst.insert(170)
bst.insert(15)
bst.insert(1)
console.log(JSON.stringify(bst))
console.log(bst.lookup(15))
console.log(bst.lookup(7))
