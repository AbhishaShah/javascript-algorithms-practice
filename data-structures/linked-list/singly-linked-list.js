class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value:value,
            next:null
        }
        this.tail = this.head;
        this.length = 1;
    }

    // convert listlink values to array
    printList(){
        const listArray = [];
        let currentNode = this.head;
        while(currentNode !== null){
            listArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return listArray;
    }

    // add item to the end of list
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode; // first assign new node to the last node tail's next value
        this.tail = newNode; // now new node becomes the last node tail
        this.length++;
        return newNode;
    }
    
    // add item to the start of list
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head; // new node's next point to the head
        this.head = newNode; // set new node as head now
        this.length++;
        return newNode;
    }

    traverseNode(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter < index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    //insert item at given index
    insert(index, value){
        // check param
        if(index >= this.length || index === this.length - 1){
            return this.append(value);
        }
        if(index === 0){
            this.prepend(value);
        }
        const newNode = new Node(value);

        const prevNode = this.traverseNode(index-1);
        const afterNode = prevNode.next;

        prevNode.next = newNode;
        newNode.next = afterNode;
        this.length++;
        return newNode;
    }

    // delete item at given index
    delete(index){
        const prevNode = this.traverseNode(index-1);
        const currentNode = prevNode.next;

        prevNode.next = currentNode.next; //currentNode.next is basically after node

        this.length--;
        return currentNode; // js remove garbage collection which is unpointed node automatically got deleted
    }

    // search at particular index
    search(index){
        if(this.length >= index){
            const getNode = this.traverseNode(index);
            return `index: ${index}, value: ${getNode.value}`;
        }
        return null;
    }
}

const myLinkedList = new LinkedList(10); // [10]

myLinkedList.append(20); // [10,20]
myLinkedList.append(30); // [10,20,30]

myLinkedList.prepend(1); // [1,10,20,30]
                                
myLinkedList.insert(2,200); //[ 1,10,200,20,30]

myLinkedList.delete(2); // [1,10,20,30]
console.log(myLinkedList.search(1)); // index: 1, value: 10


console.log(myLinkedList.printList());