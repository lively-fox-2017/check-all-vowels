'use strict'
//write your code here
function isAllVocal(words){
    for(let i = 0; i < words.length; i++){
        if(words[i].toLowerCase() !== 'a' && words[i].toLowerCase() !== 'u' && words[i].toLowerCase() !== 'i' && words[i].toLowerCase() !== 'e' && words[i].toLowerCase() !== 'o' ){
            return false;
        }
    }
    return true;
}

console.log(isAllVocal("aaaan"));