// Stack using linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null        
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;   // return top item
    }

    push(value){
        const newNode = new Node(value);
        if(this.length === 0) { // if stack is empty then top and bottom both are newnode
            this.top = newNode;
            this.bottom = newNode;
        } 
        newNode.next = this.top; // first point existing top value to the new node's next
        this.top = newNode; // then make new node as our new top item
        this.length++;
        return this;
    }

    pop(){
        if(this.length === 0) { 
            return null;
        } 

        if(this.top === this.bottom){
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
       
    }

    isEmpty(){
        if(this.length === 0)
            return "Stack is empty";
        else 
            return "Stack is not empty";
    }
}

/* Google -> Youtube -> Netflix */
const myStack = new Stack();

myStack.push("Google");
myStack.push("Youtube");
myStack.push("Netflix");

myStack.pop();

console.log(myStack.isEmpty());
console.log(myStack.peek());

console.log(myStack);
