function averagePair(arr, number) {
    if(arr.length === 0) {
        console.log(false)
        return false
    }
    let min = 0
    let max = arr.length - 1
    while(min < max){
        if((arr[min] + arr[max])/2 === number){
         console.log(true)
         return true
        }
        if((arr[min] + arr[max])/2 < number){
            min++
        }
        else{
            max --
        }
            
    }
    console.log(false)
    return false
}

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false