function selectionSort(arr) {

    for(i = 0; i < arr.length ; i++){
        let lowest = i
        for(j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[lowest]){
                lowest = j
            }
        }
        if(i !== lowest){
            //SWAP
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
    return arr

}
console.log(selectionSort([8,1,2,3,4,5,6,7]));