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

    recursiveInsert(value) {
        const newNode  = new Node(value)

        let traverseAndInsert = (currentNode) => {
            // Check left or right
            if (newNode.value < currentNode.value) {
                //Move to the left child or insert the new node
                if (!currentNode.left) {
                    currentNode.left = newNode
                } else {
                    traverseAndInsert(currentNode.left)
                }
            } else if (newNode.value > currentNode.value) {
                 //Move to the right child or insert the new node
                if (!currentNode.right) {
                    currentNode.right = newNode
                } else {
                    traverseAndInsert(currentNode.right)
                }
            } else {
                // It newNode.value = currentNode.value, don't insert the new node
                return this
            }
        }

        if (!this.root) {
            this.root = newNode
        } else {
            traverseAndInsert(this.root)
        }
    }

    recursivePreorderTraversal() {
        // Preorder: VLR
        let lookup = []
        let currentNode = this.root

        let traverseAndLookup = (currentNode) => {
            lookup.push(currentNode.value)
            // Check if ther is a left child node
            // If check (!currentNode.left) {return} then return, the function will stop execute
            if (currentNode.left) {
                traverseAndLookup(currentNode.left)
            }
            // Check if there is a right child node
            if (currentNode.right) {
                traverseAndLookup(currentNode.right)
            }
        }

        // Check if the root node has value
        if (currentNode.value) {
            traverseAndLookup(currentNode)
            return lookup
        } else {
            return lookup
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

let iterativeBST = new BinarySearchTree();
iterativeBST.insert(9)
iterativeBST.insert(4)
iterativeBST.insert(6)
iterativeBST.insert(20)
iterativeBST.insert(170)
iterativeBST.insert(15)
iterativeBST.insert(1)
console.log(JSON.stringify(iterativeBST))
// console.log(bst.lookup(15))
// console.log(bst.lookup(7))
let recursiveBST = new BinarySearchTree();
recursiveBST.recursiveInsert(9)
recursiveBST.recursiveInsert(4)
recursiveBST.recursiveInsert(6)
recursiveBST.recursiveInsert(20)
recursiveBST.recursiveInsert(170)
recursiveBST.recursiveInsert(15)
recursiveBST.recursiveInsert(1)
console.log(JSON.stringify(recursiveBST))


console.log(recursiveBST.recursivePreorderTraversal())