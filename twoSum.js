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


function twoSum(nums, target) { 
  //array of integers
  //indices of the two numbers
  //[1,2,4,5,3],6 -> 2 + 4 
  //loop through the array for every integer to give you the numbers adding
  //upto the target
  //time complexity -> O(n2)

  let map = new Map()

  for(let i=0; i<nums; i++){
    let num = arr[i]
    let complement = target - num
    if(seen.has(complement)){
      return [i, map.get(complement)]
    }
      seen.add(num)
  }
  return []
}