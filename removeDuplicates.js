function removeDupes(arr) { 
    let arr2 = new Set(arr)
     return Array.from(arr2)
}
console.log(removeDupes([1,2,2,3])) 
console.log(removeDupes(["a","a","b"],["a","b"]))
console.log(removeDupes([1,1,1,1],[1]))
