// Queue using linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null        
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first;   // return top item
    }

    enqueue(value){
        const newNode = new Node(value);
        if(this.length === 0) { // if Queue is empty then first and last both are newnode
            this.first = newNode;
            this.last = newNode;
        }
        this.last.next = newNode; // first point new node to existing last node's next
        this.last = newNode; // then make new node as our new last item
        this.length++;
        return this;
    }

    dequque(){
        if(this.length === 0) { 
            return null;
        } 
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
       
    }

    isEmpty(){
        if(this.length === 0)
            return "Queue is empty";
        else 
            return "Queue is not empty";
    }
}
/* Google <- Youtube <- Netflix */

const myQueue = new Queue();

myQueue.enqueue("Google");
myQueue.enqueue("Youtube");
 myQueue.enqueue("Netflix");

 myQueue.dequque();

console.log(myQueue.isEmpty());
console.log(myQueue.peek());

console.log(myQueue);
