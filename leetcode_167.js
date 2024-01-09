var twoSum = function (numbers, target) {
  i = 0;
  j = numbers.length -1;
  while (i < j) {
    if(numbers[i] + numbers[j] === target){
        return [i +1, j +1]
    }
    else if(numbers[i] + numbers[j] > target){
        j--
    }
    else{
        i++
    }
  }
  return -1
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 3], 6));
