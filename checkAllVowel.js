//write your code here
function cekVowels(str){
	const lib=['a','i','u','e','o']

	let temp=str.split('')

	for(let i=0;i<temp.length;i++){
		for(let j=0;j<lib.length;j++){
			if(temp[i]==lib[j] || temp[i]==lib[j].toUpperCase()){
				return true
			}
		}
	}

	return false
}

console.log(cekVowels('nIzar'));