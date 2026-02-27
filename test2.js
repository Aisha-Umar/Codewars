function nonRepeating(str){
    //finding the first non repeating char
    let count ={}

    for(let char of str){
        count[char] = count[char] || 0 + 1
    }
    for(let ch of str){
        if(count[ch]===1){
            return str.indexOf(ch)
        }
    }
    return -1
}