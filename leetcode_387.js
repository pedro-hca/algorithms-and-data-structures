function firstUniqChar(s){
    const arr = new Array(26).fill(0)

    for(let i =0; i< s.length; i ++){
        arr[s[i].charCodeAt(0) - 97] ++;
        
    }

    for(let i = 0; i< s.length; i++){
        if(arr[s[i].charCodeAt(0) - 97] === 1) {
            return i;
        }
    }

    return -1
}

function firstUniqCharNaive(s){
    let frequencyCounter = {}
    for( char of s){
        frequencyCounter[char] = (frequencyCounter[char] || 0) +1
    }

    for( key in s){
        if(frequencyCounter[s[key]] === 1){
            return key
        }
    }

    return -1
}

function firstUniqCharOptimized(s) {
    let frequencyCounter = new Map();

    for (let char of s) {
        frequencyCounter.set(char, (charCoufrequencyCounternt.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (frequencyCounter.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
}


console.log(firstUniqCharNaive("loveleetcode"))
console.log(firstUniqCharNaive("aabb"))
console.log(firstUniqCharNaive("leetcode"))
console.log(firstUniqChar("loveleetcode"))
console.log(firstUniqCharOptimized("aabb"))
console.log(firstUniqCharOptimized("loveleetcode"))
console.log(firstUniqCharOptimized("leetcode"))