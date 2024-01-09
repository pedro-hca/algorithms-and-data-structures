function isSameReflection(word1, word2){
    if(word1.length !== word1.length){
        return false
    }
    frequencyCounter1 = {}
    frequencyCounter2 = {}
    for(char of word1){
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
    }
    for(char of word2){
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
    }
    for(key in frequencyCounter1){
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false
        }
        if(frequencyCounter1[key] === frequencyCounter2[key]){
            console.log('equal')
        }
    }
    console.log(true)
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    return true
}

isSameReflection('sample','plesam')