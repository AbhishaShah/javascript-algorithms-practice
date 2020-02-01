const assert = require('assert');

const {reverse_reduce ,stringReversal} = require('./algorithms/string-reversal.js');
const palindrom = require('./algorithms/palindrom');
const reverse_integer = require('./algorithms/integer-reversal');
const fizzbuzz = require('./algorithms/fizzbuzz');
const maxCharacter = require('./algorithms/max-character');
const anagram = require('./algorithms/anagram');
const countVowel = require('./algorithms/count-vowel');
const arrayChunk = require('./algorithms/array-chunk');
const reverseArray = require('./algorithms/reverse-array');
const capitalize = require('./algorithms/capitalize');
const equalToSum = require('./algorithms/equalto_sum');
const caesarCipher = require('./algorithms/caesar-cipher');


// String Reversal
describe("String Reversal", () => {
	it("Should reverse string", () => {
		assert.equal(reverse_reduce("Hello World!"), "!dlroW olleH");
		assert.equal(stringReversal("Hello World!"), "!dlroW olleH");
	});
});

//Palindrom Checking
describe("Palindrom Checking", () => {
	it("Should return true", () => {
        assert.equal(palindrom("racecar"),true);
		assert.equal(palindrom("Never odd or eve1n"), true);
    });
    
    it("Should return false", () => {
		assert.equal(palindrom("Surprice"), false);
	});
});

//Integer Reversal
describe("Integer Reversal" ,() => {
    it("Should reverse interger", () => {
        assert.equal(reverse_integer(1234),4321);
        assert.equal(reverse_integer(-3400),-43);

    });
});

//Fizz Buzz
describe("Fizz Buzz", () => {
    beforeEach(() => (output = fizzbuzz(15) ) );

    it("Should output number", () => {
        assert.equal(output[0],1);
    });

    it("Should output Fizz", () => {
        assert.equal(output[1],"Fizz");
    });

    it("Should output Buzz", () => {
        assert.equal(output[2],"Buzz");
    });

    it("Should output Fizz Buzz", () => {
        assert.equal(output[5],"Fizz Buzz");
    });

});

//Find Max Character
describe("Max character" , () => {
    it("Should return max character", () => {
        assert.equal(maxCharacter("Hello World"),"l")
    });
});

//Anagrams checking
describe('Anagrams checking', () => {
    it("Should implement anagram", () => {
        it("Should implement anagrams", () => {
            assert.equal(anagrams("hello world", "world hello"), true);
            assert.equal(anagrams("hellow world", "hello there"), false);
            assert.equal(anagrams("hellow world", "hello there!"), false);
            assert.equal(_anagrams("hello world", "World hello"), true);
            assert.equal(_anagrams("hellow world", "hello there"), false);
        });
    });
});

// Count vowels
describe('Vowels', () => {
    it("Should count vowels", () => {
        assert.equal(countVowel("Hello world"),3);
    });
});

//Array chunks
describe("Array Chunking", () => {
    it("Should implement array chunking", () => {
        assert.deepEqual(arrayChunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
		assert.deepEqual(arrayChunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
		assert.deepEqual(arrayChunk([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);
    });
});

// Reverse Array
describe("Array reverse", () => {
    it("Should reverse array", () => {
        assert.deepEqual(reverseArray([1, 2 ,3 ,4 ]),[4, 3, 2, 1])
        assert.deepEqual(reverseArray([1, 2 ,3 ,4 ,5]),[5, 4, 3, 2, 1]);
    });
})

// Capitalize every word
describe("Capitalize every word", () => {
    it("Should capitalize word", () => {
      assert.equal(capitalize("hello world!"),"Hello World!");
    });
});

// Equal to given Sum
describe("Equal to given Sum", () => {
    it("Should implement two sum", () => {
        assert.deepEqual(equalToSum([1,2,2,3,4],4),[[2,2],[3,1]])
    });
});

// Caesar Cipher
describe("Caesar Cipher", () => {
    it("Should shift to the right", () => {
     assert.equal(caesarCipher("I love JavaScript!", 100), "E hkra FwrwOynelp!");
    });
   it("Should shift to the left", () => {
     assert.equal(caesarCipher("I love JavaScript!", -100), "M pszi NezeWgvmtx!");
    });
   });