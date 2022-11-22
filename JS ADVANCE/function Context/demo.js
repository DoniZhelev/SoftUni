function pro() {
    return function bots(a,b) {
        return a + b;

    }

}

let calculate = pro();
console.log(calculate(10,20));

