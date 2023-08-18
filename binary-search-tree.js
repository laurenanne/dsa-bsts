class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (current) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }
  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    function insertHelper(node, val) {
      if (node === null) {
        node = newNode;
        return node;
      } else if (val < node.val) {
        node.left = insertHelper(node.left, val);
      } else if (val > node.val) {
        node.right = insertHelper(node.right, val);
      }
      return node;
    }

    insertHelper(this.root, val);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root === null) {
      return undefined;
    }

    let current = this.root;

    while (current) {
      if (current.val === val) return current;

      if (val < current.val) {
        if (current.left === null) {
          return undefined;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          return undefined;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (this.root === null) {
      return undefined;
    }

    function findHelper(node, val) {
      if (node === null) return undefined;

      if (node.val === val) return node;

      if (val < node.val) {
        return findHelper(node.left, val);
      } else if (val > node.val) {
        return findHelper(node.right, val);
      }
      return node;
    }

    return findHelper(this.root, val);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(current = this.root, arr = []) {
    arr.push(current.val);
    if (current.left) this.dfsPreOrder(current.left, arr);
    if (current.right) this.dfsPreOrder(current.right, arr);
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(current = this.root, arr = []) {
    if (current.left) this.dfsInOrder(current.left, arr);
    arr.push(current.val);
    if (current.right) this.dfsInOrder(current.right, arr);
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(current = this.root, arr = []) {
    if (current.left) this.dfsPostOrder(current.left, arr);
    if (current.right) this.dfsPostOrder(current.right, arr);
    arr.push(current.val);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let queue = [this.root];
    let result = [];

    while (queue.length) {
      let current = queue.shift();
      result.push(current.val);

      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
    return result;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
