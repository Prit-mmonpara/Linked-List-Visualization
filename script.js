class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    renderList();
  }

  async insertAt(value, index) {
    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      renderList();
      await highlightNode(newNode);
      return;
    }

    let current = this.head;
    let previous = null;
    let currentIndex = 0;

    while (currentIndex < index && current) {
      previous = current;
      current = current.next;
      currentIndex++;
      renderList();
      await highlightNode(previous);
      await new Promise((resolve) => setTimeout(resolve, 500)); // Delay for visualization
    }

    if (currentIndex === index) {
      // Highlight newNode's next pointer adjustment
      newNode.next = current;
      renderList(); // Render list after setting newNode.next
      await highlightPointerUpdate(newNode, "next", current, "orange");
      await new Promise((resolve) => setTimeout(resolve, 500)); // Delay for visualization

      // Highlight previous node's next pointer adjustment
      if (previous) {
        previous.next = newNode;
      }
      renderList(); // Render list after setting previous.next
      await highlightPointerUpdate(previous, "next", newNode, "blue");
    } else {
      alert("Index out of bounds");
    }
  }

  //   async remove(value) {
  //     if (!this.head) return;

  //     if (this.head.value === value) {
  //       const removedNode = this.head;
  //       this.head = this.head.next;
  //       renderList();
  //       await highlightNode(removedNode, "removed");
  //       return;
  //     }

  //     let current = this.head;
  //     let previous = null;
  //     while (current.next && current.next.value !== value) {
  //       previous = current;
  //       current = current.next;
  //       renderList();
  //       await highlightNode(current);
  //       await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for visualization
  //     }

  //     if (current.next) {
  //       const removedNode = current.next;
  //       current.next = current.next.next;
  //       renderList();
  //       await highlightPointerUpdateForDeletion(previous, "next", current.next);
  //       await highlightNode(removedNode, "removed");
  //     }
  //   }

  removeAt(position) {
    if (position < 0 || !this.head) {
      alert("Invalid position or empty list!");
      return;
    }

    let current = this.head;
    let previous = null;
    let currentIndex = 0;
    let found = false;

    while (current) {
      if (currentIndex === position) {
        found = true;
        break;
      }
      previous = current;
      current = current.next;
      currentIndex++;
    }

    if (!found) {
      alert("Position out of bounds");
      return;
    }

    if (position === 0) {
      this.head = this.head.next;
    } else {
      previous.next = current.next;
    }

    renderList();
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();

function addNode() {
  const value = prompt("Enter node value:");
  if (value !== null && value.trim() !== "") {
    const index = prompt("Enter the index to insert at:");
    if (index !== null && index.trim() !== "") {
      const indexInt = parseInt(index);
      if (!isNaN(indexInt) && indexInt >= 0) {
        list.insertAt(value.trim(), indexInt);
      } else {
        alert("Invalid index!");
      }
    } else {
      list.append(value.trim());
    }
  } else {
    alert("Node value cannot be empty!");
  }
}

function removeNode() {
  const position = prompt("Enter position of the node to remove:");
  if (position !== null && position.trim() !== "") {
    const positionInt = parseInt(position);
    if (!isNaN(positionInt) && positionInt >= 0) {
      list.removeAt(positionInt);
    } else {
      alert("Invalid position!");
    }
  } else {
    alert("Position cannot be empty!");
  }
}

function renderList() {
  const container = document.getElementById("linked-list-container");
  container.innerHTML = ""; // Clear existing nodes

  let current = list.head;
  while (current) {
    const nodeDiv = document.createElement("div");
    nodeDiv.className = "node";
    nodeDiv.innerText = current.value;

    container.appendChild(nodeDiv);

    if (current.next) {
      const arrowDiv = document.createElement("div");
      arrowDiv.className = "arrow";
      arrowDiv.innerText = "→";
      container.appendChild(arrowDiv);
    }

    current = current.next;
  }
}

function highlightNode(node, type = "new") {
  return new Promise((resolve) => {
    const container = document.getElementById("linked-list-container");
    const nodes = container.getElementsByClassName("node");
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].innerText == node.value) {
        nodes[i].style.backgroundColor =
          type === "new" ? "lightgrey" : "lightcoral";
        setTimeout(() => {
          nodes[i].style.backgroundColor = "#f0f0f0";
          resolve();
        }, 1000);
        break;
      }
    }
  });
}

function highlightPointerUpdate(node, pointerType, targetNode, color) {
  return new Promise((resolve) => {
    const container = document.getElementById("linked-list-container");
    const nodes = container.getElementsByClassName("node");
    const arrows = container.getElementsByClassName("arrow");

    let targetIndex = -1;
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].innerText == node.value) {
        targetIndex = i;
        nodes[i].style.borderColor = color;
      }
    }

    if (pointerType === "next" && targetNode) {
      if (targetIndex !== -1 && targetIndex < arrows.length) {
        arrows[targetIndex].innerText = "↝";
        arrows[targetIndex].style.color = color;
      }
    }

    setTimeout(() => {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.borderColor = "black";
      }
      for (let i = 0; i < arrows.length; i++) {
        arrows[i].innerText = "→";
        arrows[i].style.color = "black";
      }
      resolve();
    }, 1000);
  });
}

async function highlightPointerUpdateForDeletion(
  previous,
  pointerType,
  targetNode
) {
  return new Promise((resolve) => {
    const container = document.getElementById("linked-list-container");
    const nodes = container.getElementsByClassName("node");
    const arrows = container.getElementsByClassName("arrow");

    let targetIndex = -1;
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].innerText == previous.value) {
        targetIndex = i;
        nodes[i].style.borderColor = "red";
      }
    }

    if (pointerType === "next" && targetNode) {
      if (targetIndex !== -1 && targetIndex < arrows.length) {
        arrows[targetIndex].innerText = "↝";
        arrows[targetIndex].style.color = "red";
      }
    }

    setTimeout(() => {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.borderColor = "#333";
      }
      for (let i = 0; i < arrows.length; i++) {
        arrows[i].innerText = "→";
        arrows[i].style.color = "black";
      }
      resolve();
    }, 1000);
  });
}
