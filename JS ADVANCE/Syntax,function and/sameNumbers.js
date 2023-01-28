function sameNumbers(intNum) {

    let strNum = intNum.toString()
    let isSame = true;
    let result = Number(strNum[0]);
    
    for (let i = 1; i < strNum.length; i++) {
        result += Number(strNum[i])

        if(Number(strNum[i]) != Number(strNum[i -1])) {
            isSame = false;
        }

    }

console.log(result);
console.log(isSame)
}

sameNumbers('2222222')