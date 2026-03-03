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
    for(let i=0; i<arr.length; i++){
        fixedNumber=arr[i]
        left = i+1
        right = arr.length-1
        //while loop check if fixedNumber is not equal to arr[i-1]
        //while left is less than right and arr[left] !== previous value &&
        //arr[right] !== to arr[right++] then 
        sum = fixedNumber + arr[left] + arr[right] 
        {
            if(sum === 0){
                arrOfTriplets.push([fixedNumber,arr[left],arr[right])
            }
            else if(sum < 0){
                left++
            }
            else if(sum > 0){
                right --
            }
            else{
                left++
                right--
            }
        }
    }
    return arrOfTriplets
}