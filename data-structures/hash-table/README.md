# Hash Table / Hash Map
- Hash Table is a collection of key-value pairs.
- HashMap cannot have duplicated keys(but they can have identical values).
- In Object keys can only be string but in Maps keys can be number, string, symbol, array or function.
- A hash collision occurs when a hash algorithm produces the same hash value for two different input values.(Different input and same output)

### **Array Time Complexities**
    Get: O(1)

    Search: O(1)  => if hash collision occur then it become O(n) as we need to loop through for particular value.

    Insert: O(1)

    Delete: O(1)

Space Complexities : O(n) => Fast access but more memory

### **When to use?**
- Used to improve time complexity specially to ovecome nested loops.

### **Pros**
- Fast lookup using keys instead on index.
- Fast insert
- Flexible keys 

### **Cons**
- Slow worst-case lookups: Lookups take O(n) time in the worst case.
- Unordered: Keys aren't stored in a special order. If you're looking for the smallest key, the largest key, or all the keys in a range, you'll need to look through every key to find it.