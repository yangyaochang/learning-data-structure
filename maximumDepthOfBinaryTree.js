//Finding hthe maximum depth of a binary tree

class Node{
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
    
    // Get the level, Traverse to child nodes and pass the parent's level, plus 1
    // Top-down method: preorder traversal

    maximumDepth() {
        let maxDepth = 0

        const preorderTraverse = (currentNode, parentLevel) => {
            let level = parentLevel + 1
            if (currentNode.left) {
                preorderTraverse(currentNode.left, level)
            }
            if (currentNode.right) {
                preorderTraverse(currentNode.right, level)
            }
            if (level > maxDepth) {
                maxDepth = level
            }
        }

        if (this.root) {
            preorderTraverse(this.root, 0)
            return maxDepth
        } else {
            return 0
        }
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
console.log(JSON.stringify(BST))
// JSON.stringify() converts an array or an object into JSON fromat

console.log(BST.maximumDepth())


