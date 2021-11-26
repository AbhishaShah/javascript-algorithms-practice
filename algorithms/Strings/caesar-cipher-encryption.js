/* Caesar Cipher technique is one of the encryption technique. 
    i.e, Each letter of a given text is replaced by a letter some fixed number of positions down the alphabet. 
    For example with a shift of 1, A would be replaced by B, B would become C, and so on. 
    Example: given the string ‘secret’ with key 5 would return ‘ xjhwjy’
       5 shift to s is x
       5 shift to e is j
       5 shift to c is h
       5 shift to r is w
       5 shift to e is j
       5 shift to t is y
 */

function caesarCipherEncryption(str, key) {
  let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let output = [];

  for (let i = 0; i < str.length; i++) {
    key = key % 26;
    let newCharNo = arr.indexOf(str[i]) + key;
    if (newCharNo > 25) {
      newCharNo = (-1 + (newCharNo % 25));
    }
    output.push(arr[newCharNo]);
  }
  return output.join('');
}

caesarCipherEncryption('secret', 5); // xjhwjy
caesarCipherEncryption('zyxabc', 4); // dcbefg
caesarCipherEncryption('xyz', 29); // abc