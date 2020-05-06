//Level-order traversal on a binary search tree with JavaScript

//Level-order traversal uses a queue to store nodes at the next level
class queueNode{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor() {
        this.head = null
        this.tail = this.head
        this.size = 0
    }

    enqueue(value) {
        const newNode = new queueNode(value)

        if (this.head) {
            this.tail.next = newNode
            this.tail = newNode
            this.size++
        } else {
            this.head = newNode
            // Originally, this.tail stores a value null (pass by value, pass by reference)
            this.tail = this.head
            this.size++
        }
        return this
    }

    dequeue() {
        if (this.head) {
            const value = this.head.value
            this.head = this.head.next
            this.size--
            return value
        } else {
            return 'Queue is empty'
        }
    }
}

class BSTNode{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new BSTNode(value)

        const traverseAndInsert = (currentNode) => {
            if (value < currentNode.value) {
                if (currentNode.left) {
                    traverseAndInsert(currentNode.left)
                } else {
                    currentNode.left = newNode
                }
            } else if (value > currentNode.value) {
                if (currentNode.right) {
                    traverseAndInsert(currentNode.right)
                } else {
                    currentNode.right = newNode
                }
            } else {
                return
            }
        }

        if (this.root) {
            traverseAndInsert(this.root)
        } else {
            this.root = newNode
        }
    }

    levelOrderTraverse() {
        let list = []
        let queue = new Queue()

        const traverse = (currentNode) => {
            list.push(currentNode.value)
            if (currentNode.left) {
                queue.enqueue(currentNode.left)
            }
            if (currentNode.right) {
                queue.enqueue(currentNode.right)
            }
            if (queue.size) {
                traverse(queue.dequeue())
            } 
        }

        if (this.root) {
            traverse(this.root)
        } else {
            return []
        }
        return list
    }
}

let BST = new BinarySearchTree();
BST.insert(9)
BST.insert(4)
BST.insert(6)
BST.insert(20)
BST.insert(170)
BST.insert(15)
BST.insert(1)
console.log(BST.levelOrderTraverse())


