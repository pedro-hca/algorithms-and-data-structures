function maxSubarraySum(arr, number){
    let maxTemp = 0
    let max = 0
    if(arr.length < number) return null
    for(i = 0; i < number; i++){
        max +=arr[i]
    }
    maxTemp = max
    for(i = number; i < arr.length; i++){
        maxTemp = maxTemp - arr[i - number] + arr[i]
        max = Math.max(max, maxTemp)
    }
    return max

}

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null