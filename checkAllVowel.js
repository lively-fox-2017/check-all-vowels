//write your code here
function vowelcheck(str){
  var vowel ='aiueo';
  for(var i=0 ; i< str.length ;i++){
      if (vowel.indexOf(str[i])==-1){
        return false ;
      }
  }
  return true;
}


console.log(vowelcheck('afiueoe'));
console.log(vowelcheck('aiueo'));
