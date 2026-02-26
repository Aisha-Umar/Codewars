function hasPair(arr, target) {
  let left = 0
  let right = arr.length - 1
  
  while(left < right){
  let sum = arr[left] + arr[right]
    if(sum === target){
      return true
    }
    else if(sum < target){
      left++
    }
    else{
      right++
    }
  }
  return false
}

console.log(hasPair([1, 2, 3, 4, 6],6))