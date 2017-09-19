//write your code here
function checkAllVowel(str){
  let vocal=['A','I','U','E','O'],count=0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].toUpperCase()==vocal[vocal.indexOf(str[i].toUpperCase())]) {
      count++;
    }
  }
  if (count==str.length) {
    return true
  }
  return false;
}

console.log(checkAllVowel('aiueos'));
