/*  Implement a first in first out (FIFO) queue using only two stacks.
    Input
    ["MyQueue", "push", "push", "peek", "pop", "empty"]
    [[], [1], [2], [], [], []]

    Output
    [null, null, null, 1, 1, false]
 */


    var MyQueue = function() {
        this.pushStack = [];
        this.popStack = [];
    };
    
    /** 
     * @param {number} x
     * @return {void}
     */
    MyQueue.prototype.push = function(x) {
        this.pushStack.push(x); // => O(1)
    };
    /**
     * @return {number}
     */
    MyQueue.prototype.pop = function() { // => O(n)
        while(this.pushStack.length !== 0){
            const item1 = this.pushStack.pop();
            this.popStack.push(item1);
        }

        const ans = this.popStack.pop();

        while(this.popStack.length !== 0){
            const item2 = this.popStack.pop();
            this.pushStack.push(item2);
        }
        return ans;
    };
    
    /**
     * @return {number}
     */
    MyQueue.prototype.peek = function() {
        if(this.pushStack.length === 0){
            return null;
        }
        else {
            return this.pushStack[0];
        }
    };
    
    /**
     * @return {boolean}
     */
    MyQueue.prototype.empty = function() {
        if(this.pushStack.length > 0) {
            return false;
        }
        return true;
    };
    
    /** 
     * Your MyQueue object will be instantiated and called as such:
     * var obj = new MyQueue()
     * obj.push(x)
     * var param_2 = obj.pop()
     * var param_3 = obj.peek()
     * var param_4 = obj.empty()
     */