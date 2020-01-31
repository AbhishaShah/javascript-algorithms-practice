const assert = require('assert');

const {reverse_reduce ,stringReversal} = require('./algorithms/string-reversal.js');
const palindrom = require('./algorithms/palindrom');
const reverse_integer = require('./algorithms/integer-reversal');
const fizzbuzz = require('./algorithms/fizzbuzz');
const maxCharacter = require('./algorithms/max-character');
const anagram = require('./algorithms/anagram');


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
