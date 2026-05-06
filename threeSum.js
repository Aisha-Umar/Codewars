function threeSum(arr){
    //an array of integers
    //all unique triplets that'll add upto zero
    let arrOfTriplets =[]
    //sort the array so that you can use pointers to go from small to big 
    //store the fixed number
    let fixedNumber
    //variables to store the left pointer and the right pointers
    let left
    let right
    let sum
    //brute force solution gives O(n3)
    //first sort the array
    arr = arr.sort((a,b)=>a-b)
    //loop through array
    for(let i=0; i<arr.length-2; i++){
        left = i+1
        right = arr.length-1
        if(i>0 && arr[i] === arr[i-1]) continue

        sum = fixedNumber + arr[left] + arr[right]

        while(left < right && arr[left] === arr[left+1]){
            left++
        }
        while(left < right && arr[right] === arr[right-1]){
            right++
        }
        left++
        right++

            if(sum === 0){
                arrOfTriplets.push([fixedNumber,arr[left],arr[right])
            }
            else if(sum < 0){
                left++
            }
                right --
        }
    }
    return arrOfTriplets
}