function countUniqueValues(arr){
    var i = 0
    if(arr.length === 0){
        return 0
    }
    for(var j = 1; j < arr.length; j++){
        if (arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
            console.log(arr)
        }
    }
    i++
    console.log(i)
    return i
  }

  countUniqueValues([])