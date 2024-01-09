function stringSearchNaive(string, short){
    let count = 0
    for(let i = 0; i < string.length; i++){
        for(let j = 0; j < short.length; j++){
            if(string[i + j] !== short[j]){
                break
            }
                if(j === short.length - 1){
                    count++
                }
        }
    }
    return count

}

console.log(stringSearchNaive("omgabcomgabc", "omg"))