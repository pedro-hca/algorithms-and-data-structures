memo = new Map()
var fib = function(n) {
    if(memo.has(n)) return memo.get(n)
    if(n < 2) return n
    memo.set(n, fib(n -1) + fib (n -2))
    return memo.get(n)
};

console.log(fib(2)) // 1
console.log(fib(50)) // 1