//write your code here
function checkVowel(str) {

  let strBaru = str.toLowerCase();
  let vowel = 'aeiou';
  let tampung = [];
  for (var x = 0; x < strBaru.length; x++)
  // dengan loop dari 0 sampai panjang huruf string lakukan dibawah ini
  {
    for (var y = 0; y < vowel.length; y++)
    {
      if (strBaru[x] === vowel[y])
      //jika huruf ditemukan sama dengan a e i o u maka lakukan dibawah ini
      {
        tampung.push(strBaru[x]);
      }
    }
  }
  if (tampung.length === strBaru.length)
  {
    return true;
  }
  return false;
}

console.log(checkVowel('buaya'));
console.log(checkVowel('wwf'));
console.log(checkVowel('BRASTAGI'));
console.log(checkVowel('aiueo'));
console.log(checkVowel('eeeooooiu'));
