class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    // Getting item based on given index => O(1)   
    get(index){ 
        if(this.length > 0)
         return this.data[index];
        else
         return "Array is empty";
    }

    // Adding item to the end of array and return length of array => O(1)   
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    // Deleting item from the end of array and return deleted item => O(1)   
    pop(){
        const lastItem = this.data[this.length - 1]; // create reference to make return of deleted item
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    // Deleting item from given index and return deleted item => O(n)   
    delete(index){
        const deletedItem = this.data[index];
        this.shiftItems(index);
        return deletedItem;
    }

    // Shifting array index to make delete operation
    shiftItems(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1]; // need to delete last item (,Otherwise last item contain twise in array)
        this.length-- ; // make sure to decrese length by 1
    }

    // Searching item => O(n)
    search(item){
        for(let i = 0; i < this.length - 1; i++){
            if(this.data[i] === item) {
               return (`Item "${item}" found at index ${i}`);
            }
        }
    }
}


const newArray = new MyArray();
console.log(newArray.get(1));

newArray.push("Hello");
newArray.push("Morning");
newArray.push("My");
newArray.push("name");
newArray.push("Abhi");
newArray.push("!!!");

newArray.pop();

newArray.delete(1);

console.log(newArray.search("My"));
console.log(newArray.search("Morning"));


console.log(newArray);