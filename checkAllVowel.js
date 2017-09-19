//write your code here
function checkVowel(str) {
  var abjad = ['a','i','u','e','o']
  var tampung = 0;

  for (var i = 0; i < abjad.length; i++) {
    for (var j = 0; j < abjad.length; j++) {
      if (abjad[i] === str[j]){
        tampung = tampung + 1;
      }
    }
  }
  if (tampung === str.length){
    return true
  } else {
    return false
  }
}

console.log(checkVowel('aiueo'));
