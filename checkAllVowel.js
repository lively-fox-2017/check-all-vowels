//write your code here
function checkAllVowels(arr) {
  //buat array vowelsnya
  let vocal = ['a', 'i', 'u', 'e', 'o']
  //siapin tampungnya []
  let tampung = []
  //perulangan berdasarkan arr
  for (i = 0; i < arr.length; i++) {
  //cek indexOf di array jika tidak ada maka dia false
    if (vocal.indexOf(arr[i]) === -1) {
  //jika tidak ada maka dia return false
      return false;
    }
  }
  //jika ada maka dia akan return true
  return true;
}

//OUTPUT :
console.log(checkAllVowels('aiueo')) //TRUE
console.log(checkAllVowels('aikjasoneohary')) //FALSE
console.log(checkAllVowels('ai')) //TRUE


function checkAllVowels2(arr) {
  //Split Arr Berdasarkan (,)
  let pisah = arr.split(',');
  //Buat array kosong = []
  let output = [];
  //Perulangan berdasarkan arr pisah
  for (i = 0; i < pisah.length; i++) {
  //Masukkan array pisah tersebut dalam variabel kata
    var kata = pisah[i].split('');
  //push kata kedalam output array kosong
    output.push(kata);
  }
  //panggil outputnya
  return output;
}

//OUTPUT :
console.log(checkAllVowels2('aiueoy,ukaei,ffoo'))
console.log(checkAllVowels2('aiujry'))
console.log(checkAllVowels2('ai'))
