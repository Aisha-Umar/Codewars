function firstUniqueChar(str){
    let count ={}

    for(let char of str){
        count[char] = (count[char] || 0) + 1
    }
    for(let ch of str){
        if(count[ch] === 1){
            return ch 
        }
      }
      return null
}

console.log(firstUniqueChar("aabbcd"))
console.log(firstUniqueChar("xxyz"))