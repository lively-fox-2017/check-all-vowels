function vowels(str){
    var vows = ["a","i","u","e","o"]
    for(var i = 0; i < str.length; i++){
        console.log(vows.indexOf(str[i]))
        if(vows.indexOf(str[i]) === -1){
            return false
        }
    }
    return true
}
console.log(vowels("aiueo"));
console.log(vowels("wwwwww"));

