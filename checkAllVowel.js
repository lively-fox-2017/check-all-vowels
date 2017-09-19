'use strict'
//write your code here
function cekVokal(str) {
  let vokal = ['a', 'i', 'u', 'e', 'o'];
  let counter = 0;
  for (var i = 0; i < vokal.length; i++) {
    if (str.indexOf(vokal[i]) === -1) {
      return false;
    }
  }
  return true;
}

console.log(cekVokal('aiueo'));
console.log(cekVokal('zuhri'));
