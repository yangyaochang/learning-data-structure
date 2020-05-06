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

    // For a single node of the tree, what will be the maximum depth x of the subtree rooted at itself?

    depthOfSubtree(value) {
        // Traverse to the root of the subtree
        const traverse = (currentNode) => {
            if (value > currentNode.value) {
                if (currentNode.right) {
                    return traverse(currentNode.right)
                } else {
                    return 'Doesn\'t contain this value'
                }
            }
            if (value < currentNode.value) {
                if (currentNode.left) {
                    return traverse(currentNode.left)
                } else {
                    return 'Doesn\'t contain this value'
                }
            }
            if (value === currentNode.value) {
                return findDepth(currentNode)
            }
        
        }

        // Use bottom-up to get the depth (Postorder traversal)
        function findDepth(root) {
            let [leftDepth, rightDepth] = [0, 0]

            if (root.left) {
                leftDepth = findDepth(root.left)
            }
            if (root.right) {
                rightDepth = findDepth(root.right)
            }
            if (!root.left && !root.right) {
                return 1
            }
            return Math.max(leftDepth, rightDepth) + 1
        }

        return traverse(this.root)
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
BST.insert(5)
BST.insert(17)
console.log(JSON.stringify(BST))
// JSON.stringify() converts an array or an object into JSON fromat

console.log(BST.maximumDepth())
console.log(BST.depthOfSubtree(20))



