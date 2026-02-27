function hasPair(arr, target){
    let seen = {}

    for(let num of arr ){
        let complement = target - num
        if(!seen[complement]){
            seen[num] = true
        }
        return true

    }
}