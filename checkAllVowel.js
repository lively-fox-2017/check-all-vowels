//write your code here
function cekVokal(str) {
    let vokal = 'aiueo'.split('')
    let counter = 0

    for (let i = 0; i < vokal.length; i++) {
        if (str.indexOf(vokal[i]) !== -1) {
            counter++
        }
    }
    console.log(counter);
    return (counter > 0) ? true : false
}

console.log(cekVokal('xxxx'));
console.log(cekVokal('aiueo'));
console.log(cekVokal('bjhabsc'));

/*
array 2 dimensi
*/

function arrTwoDim(row, col) {
    let input = 'aqrst, ukaei, ffooo'.split(',')
    console.log(input)
    let hasil = []

    for (r = 0; r < row; r++) {
        let row = []
        for (c = 0; c < col; c++) {
            row.push(input[r][c])
        }
        hasil.push(row)
    }
    return hasil
}

//arrTwoDim(5, 3);
console.log(arrTwoDim(3, 5));