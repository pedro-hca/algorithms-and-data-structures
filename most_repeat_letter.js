function mostRepeatHashMap(arr){
    let map = new Map()
    let repeat = 0
    let char = ""
    for(let char of arr){
        map.set(char, (map.get(char) || 0) + 1)
    }
    map.forEach((value, key) => {
        if(value > repeat){
            repeat = value
            char = key
        }
    })
    return (repeat + " " +  char)
}

function mostRepeatObj(arr){
    let obj = {}
    let repeat = 0
    let char = ""
    for(char of arr){
        obj[char] = (obj[char] || 0) + 1
    }
    for(key in obj){
        if(obj[key] > repeat){
            repeat = obj[key]
            char = key
        }
    }
    return ( repeat + " " + char)

}

console.log(mostRepeatObj("ASDGFSAHRTWEFADWQA"))