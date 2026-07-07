class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        //variable to track the minimum price that gets you the maximum maxProfit
        let minPrice =prices[0]
        //loop through the array, if a price is greater than the minimum substract and save in maxProfit
        let maxProfit=0
        let profit
        //compare the other profits and store in maxProfit
        for(let i=0; i<prices.length; i++){
            if(prices[i] >= minPrice){
                profit = prices[i] - minPrice
                maxProfit = Math.max(profit,maxProfit)
            }
            else{
                minPrice = prices[i]
            }
           }
            return maxProfit
    }
}

let solution = new Solution
console.log(solution.maxProfit( [10,1,5,6,7,1]))