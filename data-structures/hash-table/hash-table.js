class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) { // private method
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    } // O(1)

    set(key ,value){
       let address = this._hash(key); // first get the memory address using _hash function
       if(!this.data[address]){ // if address not used before create array container to store more key/value pairs as in hash table we have limited memory space
        this.data[address] = [];
       }
       this.data[address].push([key,value]); // [ <Empty  item> , [ [grapes,10000], [apples,9] ] ]
    } // O(1)

    get(key){
        let address = this._hash(key);// first get the memory address using _hash function
        const currentBucket = this.data[address]; // container having muliple set of key/value pairs
       /* console.table("currentBucket",currentBucket);
        currentBucket 
        [Array(2)]
            0: (2) ['grapes', 10000]
            1: (2) ['apples', 9]
        */
        if(currentBucket){
            for (let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        } 
        return undefined;
    } // O(1)

    keys(){ // get all keys from data
        let keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                 keysArray.push(this.data[i][0][0]);  
            }         
        }
        return keysArray;
        
    }
  } // O(n)
  
  const myHashTable = new HashTable(21);

  myHashTable.set('grapes', 10000);
  console.log(myHashTable.get('grapes'));

  myHashTable.set('apples', 9);
  console.log(myHashTable.get('apples'));

  console.log(myHashTable.keys());

  console.log(myHashTable);
  