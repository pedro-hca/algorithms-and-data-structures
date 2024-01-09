var search = function(nums, target) {
    start = 0
    end = nums.length - 1
    mid = Math.floor((start + end) / 2)
    while (start <= end) {
        if (nums[mid] < target) {
            start = mid + 1
        }
        if (nums[mid] > target) {
            end = mid - 1
        }
        mid = Math.floor((start + end) / 2)

        if (nums[mid] === target) {
            return mid
        }
    }
    return -1
};

console.log(search([-1,0,3,5,9,12], 9)) // 4
console.log(search([-1,0,3,5,9,12], 2)) // -1