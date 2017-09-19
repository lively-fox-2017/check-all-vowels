//write your code here
function vocal(str){

    var vocal = ['a', 'i', 'u', 'e', 'o']
    for(var i = 0; i < str.length; i++){
        debugger
        if(vocal.indexOf(str[i].toLowerCase()) === -1){
            return false
        }
    }
    return true

}

console.log(vocal('aiuuueeueuob'))