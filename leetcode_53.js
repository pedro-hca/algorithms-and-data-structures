var maxSubArray = function(nums) {
    maxSub = nums[0]
    currSub = nums[0]
    for(i = 1; i < nums.length; i++){
        currSub = Math.max(nums[i], currSub + nums[i])
        maxSub = Math.max(maxSub, currSub)
    }
    return maxSub
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) //6