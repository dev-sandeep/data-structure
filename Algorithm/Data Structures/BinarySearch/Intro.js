class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let node = new Node();
        if (this.root == null) {
            this.root = node;
        } else {
            this.insertNode();
        }
    }

    insertNode(node, newNode){
        
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

