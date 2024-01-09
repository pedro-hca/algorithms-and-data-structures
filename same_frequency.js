function sameFrequency(num1, num2){
    let num1ToString = num1.toString()
    let num2ToString = num2.toString()
    frequencyCounter1 = []
    frequencyCounter2 = []
    maxNum1 = 0
    maxNum2 = 0

    if(num1ToString.length !== num2ToString.length) return false;
    
    for(let i = 0; i < num1ToString.length; i++){
        frequencyCounter1.push(Number(num1ToString[i]))
    }

    for(let i = 0; i < num2ToString.length; i++){
        frequencyCounter2.push(Number(num2ToString[i]))
    }

    for(let i = 0; i < frequencyCounter1.length; i++){
        maxNum1 += frequencyCounter1[i]
    }
    for(let i = 0; i < frequencyCounter2.length; i++){
        maxNum2 += frequencyCounter2[i]
    }
    if(maxNum1 === maxNum2){
        console.log(true);
        return true
    }else {
        console.log(false);
        return false
    }
}

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false