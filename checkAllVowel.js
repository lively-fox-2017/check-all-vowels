//write your code here
function checkAllVowels(str){
	let arr = str.split('')
	let vocal = ['a','i','u','e','o'];
	let voc = 0;
	for(let i = 0;i < vocal.length;i++){
		for(let j=0;j < arr.length;j++){
			if(arr[j]==vocal[i]){
				voc ++;
				if(voc == arr.length){
					return true
				}
			}
		}
	}
	return false
}
console.log(checkAllVowels('eana'))
console.log(checkAllVowels('eaui'))
console.log(checkAllVowels('aiueo'))

function arrayDua(str){
	let arr = str.split(',');
	let temp = [];
	for(let i=0;i < arr.length;i++){
		temp.push([])
		for(let j=0;j<arr[i].length;j++){
			temp[i].push(arr[i][j])
		}
	}
	return temp
}
console.log(arrayDua('aqrst,ukaei,ffooo'))