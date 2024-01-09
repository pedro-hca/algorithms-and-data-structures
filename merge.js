function merge(arr1, arr2) {
  mergeArr = [];
  i = 0;
  j = 0;
  y = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      mergeArr[y] = arr2[j];
      j++;
      y++;
    } else if (arr1[i] < arr2[j]) {
      mergeArr[y] = arr1[i];
      i++;
      y++;
    }
  }

  while (i < arr1.length) {
    mergeArr[y] = arr1[i];
    i++;
    y++;
  }
  while (j < arr2.length) {
    mergeArr[y] = arr2[j];
    j++;
    y++;
  }
  return mergeArr;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length /2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}


console.log(mergeSort([10, 24, 76, 73]));
