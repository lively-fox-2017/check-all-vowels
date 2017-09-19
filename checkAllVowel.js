//write your code here

function checkVow (str){
    let arrVowel = 'a,i,u,e,o'.split('');
    let counter = 0;
    for(let i = 0; i < arrVowel.length; i++){
        if(str.indexOf(arrVowel[i]) !== -1){
            counter++
           
        }
    }
    console.log(counter);
    return (counter > 0) ? true : false;
}
console.log(checkVow('ami'))