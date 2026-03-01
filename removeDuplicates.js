function removeDupes(arr) { 
    let arr2 = new Set(arr)
     return Array.from(arr2)
}
console.log(removeDupes([1,2,2,3])) 
console.log(removeDupes(["a","a","b"],["a","b"]))
console.log(removeDupes([1,1,1,1],[1]))

function removeDuplicates(arr){
    let obj ={}

    for(let num of nums){
        //check if num is already in the obj
        if(obj[num]){
            return num
        }
            obj[num] = 1
    }
}
 
    let seen = new Set()

    for(let num of nums){
        if(seen.has(num)){
            return num
        }
        seen.add(num)
    }