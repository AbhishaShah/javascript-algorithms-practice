class LinkedList {
    constructor(value) {
        this.head = {
            value:value,
            next:null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            value:value,
            next:null
        }
        this.tail.next = newNode; // first assign new node to the tail which is head's next
        this.tail = newNode; // new node is our new tail now
        this.length++;
        return newNode;
    } 
    
    prepend(value){
        const newNode = {
            value:value,
            next:this.head // point to the current head
        }
        this.head = newNode; // new head got changed to new node
        this.length++;
        return newNode;
    }

    printList(){
        const nodeArray = [];
        let currentNode = this.head;
        while(currentNode !== null){
            nodeArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return nodeArray;
    }

    traversalNode(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter < index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    
    insert(index,value){
        const newNode = {
            value:value,
            next:null
        }
        const beforeNode = this.traversalNode(index-1);
        const afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.next = afterNode;
        this.length++;
        return this.printList();
    }

}


const myLinkedList = new LinkedList(5);
// 1,5,10,15
myLinkedList.append(10);
myLinkedList.append(15);

myLinkedList.prepend(1);

myLinkedList.insert(2,20);

console.log(myLinkedList.printList());
console.log(myLinkedList);