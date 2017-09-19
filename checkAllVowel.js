function checkAllVowel(str) {

  const vowels = ['a', 'i', 'u', 'e', 'o'];

  let counter = 0;

  for (let i = 0; i < str.length; i++) {

    // If found
    if (vowels.indexOf(str[i].toLowerCase()) !== -1) {
      counter += 1;
    }

  }

  return counter === str.length;

}

console.log(checkAllVowel('dimitrI')); // false
console.log(checkAllVowel('aaAa')); // true
console.log(checkAllVowel('daAaa')); // false
console.log(checkAllVowel('IiIi')); // true
