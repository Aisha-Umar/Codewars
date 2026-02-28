function maxSubarraySum(arr,k){
    let windowSum =0
    for(let i=0; i<k; i++){
        windowSum += arr[i]
    }
    let maxSum = windowSum

    for(let i=k; i < arr.length; i++){
        windowSum = windowSum - arr[i-k] + arr[i]
        maxSum = Math.max(maxSum, windowSum)
    }
    return maxSum
}