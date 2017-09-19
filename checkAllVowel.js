function isAllVowels(string) {
	const vowels = ['a', 'i', 'u', 'e', 'o'];
	for (let i = 0; i < string.length; i++) {
		let isConsonant = vowels.indexOf(string[i].toLowerCase()) === -1;
		if (isConsonant) return false;
	}
	
	return true;
}

console.log(isAllVowels('AaaIuEEo')); //true
console.log(isAllVowels('AaMaIuEEo')); //false