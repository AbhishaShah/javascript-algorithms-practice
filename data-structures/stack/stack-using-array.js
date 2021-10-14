// Stack using array

class Stack {
    constructor(){
        this.data = [];
    }

    peek(){
        return this.data[this.data.length-1];   // return top item
    }

    push(value){
        this.data.push(value); 
        return this;
    }

    pop(){
        if(this.data.length === 0) { 
            return null;
        } 
        this.data.pop();
        return this;
       
    }

    isEmpty(){
        if(this.data.length === 0)
            return "Stack is empty";
        else 
            return "Stack is not empty";
    }
}

const myStack = new Stack();

myStack.push("Google");
myStack.push("Youtube");
myStack.push("Netflix");

myStack.pop();

console.log(myStack.isEmpty());
console.log(myStack.peek());

console.log(myStack);
