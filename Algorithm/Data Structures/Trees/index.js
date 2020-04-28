class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// the initialisation of BST
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
}

/**
 * the code to insert a node
 */
BinarySearchTree.prototype.insert = function(data){
    var newNode = new Node(data);
    if(this.root == null)
        this.root = newNode;
    else
        this.insertNode(this.root, newNode);
}

BinarySearchTree.prototype.insertNode = function(node, newNode){
    if(newNode.data < node.data){
        if(node.left == null){
            node.left = newNode;
        }else{
            this.insertNode(node.left, newNode);
        }
    }else{
        if(node.right == null){
            node.right = newNode;
        }else{
            this.insertNode(node.right, newNode);
        }
    }
}

BinarySearchTree.prototype.inorder = function(node){
    if(node != null){
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
    }
}

BinarySearchTree.prototype.getRootNode = function(){
    return this.root;
}

var BST = new BinarySearchTree();
BST.insert(15); 
BST.insert(25); 
BST.insert(10); 
BST.insert(7); 
BST.insert(22); 
BST.insert(17); 
BST.insert(13); 
BST.insert(5); 
BST.insert(9); 
BST.insert(27); 

var root = BST.getRootNode();
BST.inorder(root);
