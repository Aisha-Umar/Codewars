function countChars(chars){
    let obj ={}
    for(let char of chars){
       obj[char] ? obj[char]+=1 : obj[char]=1
    }
    return obj
}

console.log(countChars('aabcc'))