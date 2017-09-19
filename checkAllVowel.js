function checkAllVowels(input){
let aiueo = 'aiueo';
var total = 0
for(var i = 0; i < input.length; i ++){
  for(var j = 0; j < aiueo.length; j++){
      if(input[i] == aiueo[j]){
      total++;
      }

    }

  }
  if(total == input.length){
    return true
  }
  else{
    return false
  }
}







console.log(checkAllVowels('aaaiiuu'))
