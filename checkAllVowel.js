//write your code here

let vokal = 'aiueo';
let hurufVokal = vokal.split('');

function cekVokal(str) {
    if (str == vokal) {
        return true
    } else {
        return false
    }
}

console.log(cekVokal('aqrst'));
console.log(cekVokal('aiueo'));
console.log(cekVokal('bjhabsc'));