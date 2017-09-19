//write your code here
function checkVowel(str){
  let vowel=['a','i','u','e','o']
  let low=str.toLowerCase()

  for(let i=0;i<str.length;i++){
    for(let j=0;j<str.length;j++){
      if(low[j]===vowel[i]){
        return true
      }else{
        return false
      }
    }
  }
}

console.log(checkVowel('uop'));
