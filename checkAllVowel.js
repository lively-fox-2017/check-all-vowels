//write your code here
function cekVokal(str) {
    let vokal = 'aiueo'.split('')
    let counter = 0

    for (let i = 0; i < vokal.length; i++) {
        if (str.indexOf(vokal[i] !== -1)) {
            counter++
        }
    }
    return (counter > 0)
}

// console.log(cekVokal('xxxx'));
console.log(cekVokal('aiueo'));
// console.log(cekVokal('bjhabsc'));