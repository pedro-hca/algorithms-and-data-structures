function findLongestSubstring(str){
var longest = 0
var seen = {}
var start = 0
    for(let i = 0; i < str.length; i++){
        let char = str[i]
        if(seen[char]){
            start = Math.max(start, seen[char])
        }

        longest = (Math.max(longest, i - start + 1))
        seen[char] = i + 1
    }
    return longest;
}
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1)
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6

// Write a function called findLongestSubstring, 
// which accepts a string and returns the length 
// of the longest substring with all distinct characters.