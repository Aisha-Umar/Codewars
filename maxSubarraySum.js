function maxSubarraySum(arr,k){
    //get the sum of the first k numbers
    let windowSum
    let maxSum

    for(let i=0; i<k; i++){
        windowSum += arr[i]
    }
    maxSum = windowSum

    for(let i=k; i<arr.length; i++){
        windowSum = windowSum - arr[i-k] + arr[i]
        maxSum = Math.max(maxSum,windowSum)
    }
    return maxSum
}