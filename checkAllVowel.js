//write your code here
function checkAllVowels(str) {
  var myVowel = ['a', 'e', 'i', 'o', 'u'];
  var newStr = str.toLowerCase();
  var kata = newStr.split('');

  for (var i = 0 ; i < newStr.length; i++) {
    if(myVowel[0]!== newStr[i] && myVowel[1]!== newStr[i] && myVowel[2]!== newStr[i]
      && myVowel[3]!== newStr[i] && myVowel[4]!== newStr[i]) {
        return false;
    }
  }

  return true;
}

console.log(checkAllVowels('aaa'));

//Release 1: Rabu
/*
Release 1: Rabu
Buat fungsi untuk membentuk array 2 dimensi dengan ukuran 5x3 dari string yang diberikan

//input : "aqrst, ukaei, ffooo"
//output:
//[ ['a', 'q', 'r', 's', 't'],
//  ['u', 'k', 'a', 'e', 'i'],
//  ['f', 'f', 'o', 'o', 'o']]
*/
