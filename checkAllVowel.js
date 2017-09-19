function checkAllVowel(arr){
    var count =0;
    var arr = arr.toLowerCase();
    for(var i=0; i< arr.length; i++){
        if(arr[i]=== 'a' || arr[i] === 'i' || arr[i] === 'u' || arr[i] === 'e' || arr[i] === 'o'){
            count++;
        }else{
            return false;
        }

    }
    return true;
}

console.log(checkAllVowel('aaAAaba'));