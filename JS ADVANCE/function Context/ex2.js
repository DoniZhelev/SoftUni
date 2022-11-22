function getFibonator() {

    let currentNum = 0;
    let nextNum = 1;
     return ()=> {
    let resultNum = currentNum + nextNum;
        currentNum = nextNum;
        nextNum = resultNum
        return currentNum

    }

}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
