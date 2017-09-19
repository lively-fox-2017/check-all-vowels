//write your code here
function cekVowel(arr){
  let arrStr = arr.split('');
  let vocal = 0;
  for (let i = 0; i < arrStr.length; i++) {
    if(arrStr[i] === 'a' || arrStr[i] === 'i' || arrStr[i] === 'u' || arrStr[i] === 'e' || arrStr[i] === 'o'){
      vocal++
    }
  }

  if(vocal === arrStr.length){
    return true;
  }
  return false;
}

console.log(cekVowel('lively'));
console.log(cekVowel('aeuui'));
console.log(cekVowel('adalah'));
console.log(cekVowel('ooaauu'));
