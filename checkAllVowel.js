//write your code here
function checkVowel(str) {

    var strBaru = str.toLowerCase();
    for (var x = 0; x < strBaru.length; x++)
    // dengan loop dari 0 sampai panjang huruf string lakukan dibawah ini
    {
      if (strBaru[x] === 'a' || strBaru[x] === 'e' || strBaru[x] === 'i' || strBaru[x] === 'o' || strBaru[x] === 'u')
      //jika huruf ditemukan sama dengan a e i o u maka lakukan dibawah ini
      {
        return true;
      }
    }
    return false;
  }

console.log(checkVowel("buaya"));
console.log(checkVowel("wwf"));
console.log(checkVowel("BRASTAGI"));
