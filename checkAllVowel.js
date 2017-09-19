//write your code here
/*buat fungsi untuk mengecek apakah suatu string terdiri dari huruf vokal semua atau tidak
return true bila ditemukan
return false bila tidak*/
'use strict'
function isAllVocal(str){
  let arrStr = str.split('');
  let vocals = 'aiueo';
  for (let i of arrStr) {
    if (vocals.indexOf(i.toLowerCase())==-1) return false;
  }
  return true;
}

console.log(isAllVocal('aiueo'));
console.log(isAllVocal('aku '));
