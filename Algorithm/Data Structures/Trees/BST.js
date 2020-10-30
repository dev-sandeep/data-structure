//From UDemy

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        var node = new Node(val);
        if (!this.root) {
            this.root = node;
            return this;
        } else {
            var root = this.root;
            while (true) {
                if (val < root.data) {
                    if (root.left == null) {
                        root.left = node;
                        return this;
                    } else {
                        root = root.left;
                    }
                } else if (val > root.data) {
                    if (root.right == null) {
                        root.right = node;
                        return this;
                    } else {
                        root = root.right;
                    }
                } else {
                    return undefined;
                }
            }
        }
    }

    search(val) {
        var root = this.root;
        if (root == null)
            return false;

        if (root == val)
            return true;

        while (true) {
            if (!root)
                return false;

            if (root.data == val)
                return true;


            if (val < root.data) {
                root = root.left;
            } else if (val > root.data) {
                root = root.right;
            }
        }

    }

    bfs() {
        var node = this.root;
        var queue = [],
            visited = [];
        if (!node)
            return [];

        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            visited.push(node.data);

            if (node.left)
                queue.push(node.left);

            if (node.right)
                queue.push(node.right);

        }

        return visited;
    }

    dfsPreOrder(){
        var data = [];
        var root = this.root;
        
        function traverse(node){
            data.push(node.data);
            if(node.left)
                traverse(node.left);

            if(node.right)
                traverse(node.right);
        }

        traverse(root);

        return data;
    }
}

var b = new BST();
b.insert(10);
b.insert(6);
b.insert(15);
b.insert(3);
b.insert(8);
b.insert(20);


// console.log(b.search(17));
// console.log(b.bfs());
console.log(b.dfsPreOrder());
// console.log(b);
// var tree = new BST();
// tree.root = new Node(10);
// tree.left = new Node(7);
// tree.right = new Node(13);
// tree.right.right = new Node(15);
// console.log(tree);