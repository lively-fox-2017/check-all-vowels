//write your code here
function checkAllVowels(str){
  var arrVowel = ['a','i','u','e','o'];
  for(let i=0;i<str.length;i++){
    if(arrVowel.indexOf(str[i].toLowerCase())===-1){
      return false;
    }
  }
  return true;
}

console.log(checkAllVowels('aaa'));
console.log(checkAllVowels('aba'));
