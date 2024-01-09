function findLongestSubstring(str){
    // Initialize variables
    let longest = 0;  // Length of the longest substring
    let seen = {};    // A map to store the index of each character seen so far
    let start = 0;     // Start index of the current substring

    // Iterate through the string using the sliding window approach
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        // If the character is already seen, update the start index to the next position of the repeated character
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // Calculate the length of the current substring and update the longest length if needed
        longest = Math.max(longest, i - start + 1);
        // Store the index of the next occurrence of the current character to avoid double counting
        seen[char] = i + 1;
    }

    // Return the length of the longest substring
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