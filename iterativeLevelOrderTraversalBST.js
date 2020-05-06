var levelOrder = function(root) {
    if (root) {
        let list = []
        let currentLevel = []
        let queue = new Queue()
        queue.enqueue(root) 
        let length = queue.size
        
        while (length > 0) {
            for (let i = 0; i < length; i++) {
                let node = queue.dequeue()
                currentLevel.push(node.val)
                if (node.left) {
                    queue.enqueue(node.left)
                }
                if (node.right) {
                    queue.enqueue(node.right)
                }
            }
            list.push(currentLevel)
            currentLevel = []
            length = queue.size
        }
        return list
    } else {
        return []
    }

};