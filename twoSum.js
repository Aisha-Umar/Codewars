function hasPair(arr, target) {
  let left 
  let right
  let sum 

  for(let i of arr){
    left = arr[i]
    right = arr[length-1-i]
    sum = left + right
    if(sum == target){
        return true
    }
    else if(sum > target){
        i = i-1
        right = arr[-i]
    }
    else if(sum < target){
        i = i + 1
        left = arr[i]
    }
  }

}

console.log(hasPair([1, 2, 3, 4, 6],6))