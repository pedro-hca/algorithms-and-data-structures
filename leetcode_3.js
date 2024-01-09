// com obj
var lengthOfLongestSubstring = function(s) {
let start = 0
let seen = {}
let longest = 0
for(i = 0; i < s.length; i ++){
    if(seen[s[i]]){
        start = Math.max(start, seen[s[i]])
    }
    longest = Math.max(longest, i - start + 1)
    seen[s[i]] = i + 1
}
return longest
};

//com hashmap
var lengthOfLongestSubstring = function(s) {
let start = 0
let seen = new Map()
let longest = 0
for(i = 0; i < s.length; i ++){
    char = s[i]
    if(seen.get(char)){
        start = Math.max(start, seen.get(char))
    }
    longest = Math.max(longest, i - start + 1)
    seen.set(char, i + 1)
}
return longest
};

console.log(lengthOfLongestSubstring("abba")) // 2                                 
console.log(lengthOfLongestSubstring("abcabcbb")) // 3                                 
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3