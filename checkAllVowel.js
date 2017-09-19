//write your code here


let checkVowel = str=> {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let newstr = str.toLowerCase();
	for (i = 0; i < newstr.length; i++) {
		if (vowels.indexOf(newstr[i]) ===  -1) {
			return false;
		}
	}
	return true;
}

console.log(checkVowel('ab'))
console.log(checkVowel('aeaiaoau'))
