//write your code here
function checkVowel(str){
	var vowel = 'aiueo';

	for(var i = 0; i < str.length; i++){
		for(var j = 0; j < vowel.length; j++){
			if(str[i] === vowel[j]){
				return true;
			}
		}
	}

}

console.log(checkVowel('jajaja'))