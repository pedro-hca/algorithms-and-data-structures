function modNumber(num1, num2){
    intervalArr = []
    modNumbers = []
    for(i = num1 + 1; i < num2; i++){
        intervalArr.push(i)
        console.log(intervalArr)
    }

    for(num of intervalArr){
        if(num % 2 === 0 || num % 3 === 0 || num % 6 === 0){
            modNumbers.push(num)
        }
    }
    return modNumbers


}

console.log(modNumber(1,15))