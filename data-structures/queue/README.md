# Queue
- Queues are a ordered data structure where the first data to get in is also the first to go out. A.k.a First-in, First-out (FIFO). 
Example: line of people at the movies, Uber ordres, printer machine functionality

- Linked list better than array to create Queue. Because when we insert or delete item in array we need to shift indexing everytime which is O(n).But in linked list we only need to update pointer which is O(1).

### **Queue Time Complexities**
    enqueue: O(1)

    dequeue: O(1)

    peek: O(1)

    lookup: O(n)

### **When to use?**
-  Queues are most useful for pop and push items.  

### **Pros**
- Fast Push/Pop
- Fast Peek.
- Ordered

### **Cons**
- Slow Lookup