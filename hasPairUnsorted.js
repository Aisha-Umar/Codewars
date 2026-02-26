function hasPair(arr, target){
    let seen ={}

    for(let num of arr){
        let complement = target - num
        if(seen[complement]){
            return true
        }
        else{
            seen[num] = true
        }
    }
    return false
}

console.log(hasPair([3, 1, 4, 6, 5], 9)); // true (4+5)
console.log(hasPair([3, 1, 4, 6, 5], 10)); // false