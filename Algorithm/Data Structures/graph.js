/**
 * implementation of graph goes here
 */

function undirectedGraph() {
    this.edges = {};
}

undirectedGraph.prototype.addVertex = function (vertex) {
    this.edges[vertex] = {};
}

undirectedGraph.prototype.addEdge = function (vertex1, vertex2, weight) {
    if (weight == undefined) {
        weight = 0;
    }

    this.edges[vertex1][vertex2] = weight;
    this.edges[vertex2][vertex1] = weight;
}

undirectedGraph.prototype.removeEdge = function (vertex1, vertex2) {
    if (this.edges[vertex1] && this.edges[vertex1][vertex2] != undefined) {
        delete this.edges[vertex1][vertex2];
    }

    if (this.edges[vertex2] && this.edges[vertex2][vertex1] != undefined) {
        delete this.edges[vertex2][vertex1];
    }
}

undirectedGraph.prototype.removeVertex = function (vertex) {
    /* traverse through the adjacent vertex */
    for (var adjacentVertex in this.edges[vertex]) {
        this.removeEdge(adjacentVertex, vertex);
    }
    delete this.edges[vertex];
}

// var g1 = new undirectedGraph();
// g1.addVertex(1);
// g1.addVertex(2);
// g1.addEdge(1, 2, 1);
// console.log(g1.edges);
// g1.removeVertex(1);
// console.log(g1.edges);

function directedGraph() {
    this.edges = [];
}

directedGraph.prototype.addVertex = function (vertex) {
    this.edges[vertex] = {};
}

directedGraph.prototype.addEdge = function (origVertex, destVertex, weight) {
    if (weight == undefined)
        weight = 0;

    this.edges[origVertex][destVertex] = weight;
}

var digraph1 = new directedGraph();
digraph1.addVertex("A");
digraph1.addVertex("B");
digraph1.addVertex("C");
digraph1.addEdge("A", "B", 1);
digraph1.addEdge("B", "C", 2);
digraph1.addEdge("C", "A", 3);
console.log(digraph1.edges);

directedGraph.prototype.traverseBFS = function(vertex, fn){
    var queue = [],
    visite = {}

    queue.push(vertex);
    while(queue.length){
        
    }
}