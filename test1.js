function hasPair(arr, target){
    let seen = {}

    for(let num of arr ){
        let complement = target - num
        if(seen[complement] !== undefined){
            return true
        }
            seen[num] = true
    }
    return false
}