function areThereDuplicates() {
   let frequencyCounter1 = {}

    for(let value of arguments){
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1
    }
    for(let key in frequencyCounter1){
        if(frequencyCounter1[key] > 1){
            return true
        }
    }
    return false 
  }

areThereDuplicates(10, 30 ,1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 