function checkvowel(str) {
  var vowelArr = ["a","e","i","o","u"];
  var total = 0;

  for (var i = 0; i < vowelArr.length; i++) {
    for (var j = 0; j < str.length; j++) {
        if (str[j].toLowerCase() === vowelArr[i]) {
            total++
        }
    }
  }
  return total === str.length;

}
console.log(checkvowel("aaaaaUaaaaaa"))
console.log(checkvowel("aaaaakjsdbaskdisdaaaaaa"))
