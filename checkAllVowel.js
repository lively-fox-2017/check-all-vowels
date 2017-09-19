let data = ['a', 'i', 'u', 'e', 'o'];

function cekVowel(kata) {

    let total = 0;
    for (var a = 0; a < kata.length; a++) {
        console.log(kata[a]);
        if (data.indexOf(kata[a]) === -1) {
            return false;
        }
    }
    return true;
}
console.log(cekVowel('aius'));
console.log(cekVowel('aieo'));
console.log(cekVowel('asbjhsduiw'));
console.log(cekVowel('aeuieauiea'));