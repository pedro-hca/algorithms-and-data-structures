function binarySearch(arr, num){
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== num && start <= end){
        if(arr[middle] < num) {
            start = middle +1
        }
        if(arr[middle] > num) {
            end = middle -1
        }
        middle = Math.floor((start + end) / 2)
    }
    return arr[middle] === num? middle : -1
  }
console.log(binarySearch([1,2,3,4,5],2)) // 1
console.log(binarySearch([1,2,3,4,5],3))// 2
console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],6)) // -1
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 10)) // 2
  console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 95) )// 16
  console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 100) )// -1