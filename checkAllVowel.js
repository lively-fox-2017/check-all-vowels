let checkAllVowels = (str) => {
  let vowels = ['a', 'i', 'u', 'e', 'o'];
  let arr = str.split("");
  for (var i = 0; i < arr.length; i++) {
    if (vowels.indexOf(arr[i]) === -1)
      return false;
  }
  return true;
}


console.log(checkAllVowels('aaaaaaaaaaaaiiiiiiiiiiiiiiiisuuuuuuuuuuuuueeeeeeeeooooooo'));
console.log(checkAllVowels('aaaa'));
console.log(checkAllVowels('aaaaaaaaaaaaas'));
console.log(checkAllVowels('siiiiiiiiiii'));
