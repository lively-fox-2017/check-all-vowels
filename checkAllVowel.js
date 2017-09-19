//release 0

function checkAllVowel(str){
	let vowel = ['a','i','u','e','o'];
  for (var i = 0; i < str.length; i++) {
    if (vowel.indexOf(str[i]) == -1) {
     return false
 	 }
  }
return true
}
console.log(checkAllVowel('aqrst'))
console.log(checkAllVowel('ooooo'))

//release 1
function stringToArray(str){
	let strN=str.split(',');
	let tampung=[];
	for(i=0; i<strN.length; i++){
		tampung.push(strN[i].split(''))
	}
return tampung
}
console.log(stringToArray('aqrst,ukaei,ffooo'))
