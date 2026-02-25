function firstUniqueNumber(arr) {
  let count = {}
  for(let n of arr){
    count[n] = (count[n] || 0) +1
  }
  for(let n of arr){
    if(count[n]===1){
        return n
    }
  }
  return null
}

console.log(firstUniqueNumber([4, 5, 1, 2, 0, 4, 1, 0]))
// → 5
