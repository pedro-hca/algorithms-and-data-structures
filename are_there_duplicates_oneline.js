function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }

areThereDuplicates(10, 30 ,1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true