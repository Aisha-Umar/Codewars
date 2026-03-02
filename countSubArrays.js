function countSubArray(arr, k){
    //an array of integers
    //count for subArrays that sum equal to k
    //[2,4,5,2,6,1,6,4],13
    //add contiguous numbers until you get k
    //loop through array with each integer looping through a nested array
    //until you get a sum =k
    //increment count
    //keep a running sum as you iterate as a prefix sum 
    //store the prefix sum in the hashmap to keep count of how many times it occured
    //at each iteration you're starting with index=0 and sum=0 and as you
    //add to the sum, also keep checking sum at current index - k
    //if the prefix sum = current index sum - k then you have found a subarray
    //that adds to current index sum to give you k so you add to the count
    
    let count =0
    let sum =0
    let sumCount = {0:1}

    for(let i=0; i<arr.length; i++){
        sum += arr[i]
        //store this sum in the sumCount
       
        let prefixSum = sum - k
        if(sumCount[prefixSum]){
            count += sumCount[prefixSum]
        }
         sumCount[sum] = (sumCount[sum] || 0) + 1
    }
    return count
}