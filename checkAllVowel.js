//write your code here
function cekVokal(str) {
  return str.split('').every(vokal)

}

function vokal(element) {
  return (element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u')? true: false
}

console.log(cekVokal('aba'));
