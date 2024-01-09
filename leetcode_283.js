var moveZeroes = function(nums) {
    let index = 0
    for(let i = 0; i < nums.length ; i++){
        if(nums[index] === 0){
            nums.push(nums[index])
            nums.splice(index, 1)
            index--
        }
        index++
    }
    return nums
};
var moveZeroes = function(nums) {
    let lastZero = 0
    for(let i = 0; i < nums.length ; i++){
        if(nums[i] !== 0){
            const aux = nums[lastZero]
            nums[lastZero] = nums[i]
            nums[i] = aux
            lastZero++
        }
    }
    return nums
};


console.log(moveZeroes([1,1,0,3,12])) // [1,3,12,0,0]
console.log(moveZeroes([0,1,0,3,12])) // [1,3,12,0,0]

console.log(moveZeroes([0,0,1])) // [1,0,0]