class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //array of integers
        //array of integers
        //[1,2,4,6]
        //[48,24,12,8]
        //nums.splice(0,1)
        //nums.splice(1,2)
        //nums.splice(2,3)
        //loop over nums,splice the self, then reduce
        let output = []
        
        for(let i=0; i < nums.length; i++){
            let nums2 = nums.slice()
            nums2.splice(i,1)
            let product = nums2.reduce((prod,num)=>prod*num,1)
            output.push(product)
        }
        return output
    }

}

const solution = new Solution();

console.log(solution.productExceptSelf([1,2,4,6]));

