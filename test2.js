function nonRepeating(str){
    //finding the first non repeating char
    let count ={}

    for(let char of str){
        count[char] = (count[char] || 0) + 1
    }
    for(let i=0; i<=str.length-1; i++){
        if(count[str[i]] === 1){
            return i
        }
    }
    
    return -1
}