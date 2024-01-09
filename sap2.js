function words(input){
    let words = input.split(" ")
    let frequencyCounter = {}
    let result = []
    for(let char of words){
          frequencyCounter[char] = (frequencyCounter[char] || 0) +1
    }
    for(let key in frequencyCounter){
            if(frequencyCounter[key] > 1){
                result += key + " "
            }
    }
    if(result.length === 0){
            console.log("NA")
            return "NA"
    }
    result.trim()
    console.log(result)
    return result
}

words("cat batman latt matter cat matter cat")
words("block brick black blue blah black")
