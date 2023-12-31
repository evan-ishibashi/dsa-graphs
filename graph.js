"use strict";
/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}


/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** add Node instance and add it to nodes property on graph. */
  addNode(node) {
    this.nodes.add(node);
   }

  /** add array of new Node instances and adds to them to nodes property. */
  addNodes(nodeArray) {
    for (const node of nodeArray){
      this.nodes.add(node);
    }
  }

  /** add edge between nodes n1,n2 */
  addEdge(n1, n2) {
    n1.adjacent.add(n2);
    n2.adjacent.add(n1);
   }

  /** remove edge between nodes n1,n2 */
  removeEdge(n1, n2) {
    n1.adjacent.delete(n2);
    n2.adjacent.delete(n1);
   }

  /** remove node from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that node
   */
  removeNode(node) {
    for (const graphNode of this.nodes){
      graphNode.adjacent.delete(node);
    }
    this.nodes.delete(node);
   }

  /** traverse graph with DFS and returns array of Node values */
  depthFirstSearch(start) {
    const stack = [start];
    const seen = new Set([start]);

    while (stack.length){
      const current = stack.pop()
      for (const neighbor of current.adjacent){
        if (!seen.has(neighbor)){
          stack.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    return [seen];
   }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start, seen=new Set([start])) {

    let nodeList = [start.value];
    for (let neighbor of start.adjacent){
      if (!seen.has(neighbor)){
        seen.add(neighbor);
        return nodeList.concat(this.breadthFirstSearch(neighbor),seen)
      }
    }


    // const queue = [start];
    // const seen = [start];

    // while (queue.length){
    //   const current = queue.shift();
    //   for (const neighbor of current.adjacent){
    //     if(!seen.includes(neighbor)){
    //       queue.push(neighbor);
    //       seen.push(neighbor);
    //     }
    //   }
    // }
    // return seen.map(n => n.value);
   }

  /** find the distance of the shortest path from the start node to the end node */
  distanceOfShortestPath(start, end) {

   }
}

module.exports = { Graph, Node }
