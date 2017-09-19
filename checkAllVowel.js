//write your code here
function checkVowels(str){
	let vowels = ["a", "i", "u", "e", "o"];
	for(var i=0;i<=str.length-1;i++){
		if(vowels.indexOf(str[i].toLowerCase()) === -1){
			return false;
		}
	}
	
	return true;
}

console.log(checkVowels("redhaputra")); // false
console.log(checkVowels("aiueo")); // true
console.log(checkVowels("aaaaaaaa")); // true