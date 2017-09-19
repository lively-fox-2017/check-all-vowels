function checkAllVowel(arr){
    var count =0;
    for(var i=0; i< arr.length; i++){
        for(var j=0; j<arr.length; j++){
        if(arr[i][j] === 'A' || arr[i][j] === 'I' || arr[i][j] === 'U' || arr[i][j] === 'E' || arr[i][j] === 'O'){
            count++;
        }else{
            return false;
        }
        }

    }
    return true;
}

console.log(checkAllVowel([['A', 'A', 'O', 'O', 'O'],['A', 'A', 'O', 'O', 'O'],['A', 'A', 'O', 'O', 'O']]));