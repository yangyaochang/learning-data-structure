//Using recursion to implementing a binary search tree with JavaScript

class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class RecursiveBST{
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)

        const traverseAndInsert = (currentNode) => {
            if (value > currentNode.value) {
                if (!currentNode.right) {
                    currentNode.right = newNode
                } else {
                    traverseAndInsert(currentNode.right)
                }
            } else if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode
                } else {
                    traverseAndInsert(currentNode.left)
                }
            }
        }

        if (!this.root) {
            this.root = newNode
        } else {
            traverseAndInsert(this.root)
        }
        return this
    }

    // Seperate traversal and visiting into two different function so that visiting funaction can be reused.
    preorderLookup() {
        let list = []
        const lookup = (currentNode) => {
            list.push(currentNode.value)
        }
        this.preorderTraverse(this.root, lookup)
        return list
    }

    inorderLookup() {
        let list = []
        const lookup = (currentNode) => {
            list.push(currentNode.value)
        }
        this.inorderTraverse(this.root, lookup)
        return list
    }

    postorderLookup() {
        let list = []
        const lookup = (currentNode) => {
            list.push(currentNode.value)
        }
        this.postorderTraverse(this.root, lookup)
        return list
    }

    // Differnet ways of traversal in binary search tree
    preorderTraverse(currentNode, visiting) {
        visiting(currentNode)
        if (currentNode.left) {
            this.preorderTraverse(currentNode.left, visiting)
        }
        if (currentNode.right) {
            this.preorderTraverse(currentNode.right, visiting)
        }
    }

    inorderTraverse(currentNode, visiting) {
        if (currentNode.left) {
            this.inorderTraverse(currentNode.left, visiting)
        }
        visiting(currentNode)
        if (currentNode.right) {
            this.inorderTraverse(currentNode.right, visiting)
        }
    }

    postorderTraverse(currentNode, visiting) {
        if (currentNode.left) {
            this.postorderTraverse(currentNode.left, visiting)
        }
        if (currentNode.right) {
            this.postorderTraverse(currentNode.right, visiting)
        }
        visiting(currentNode)
    }
}

let BST = new RecursiveBST();
BST.insert(9)
BST.insert(4)
BST.insert(6)
BST.insert(20)
BST.insert(170)
BST.insert(15)
BST.insert(1)
console.log(JSON.stringify(BST))
// JSON.stringify() converts an array or an object into JSON fromat


console.log(BST.preorderLookup())
console.log(BST.inorderLookup())
console.log(BST.postorderLookup())

