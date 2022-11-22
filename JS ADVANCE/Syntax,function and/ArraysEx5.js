// function solve(input) {
// let firstNumber = 0;

// for(let i = 0; i < input.length; i++) {
//     if(input[i] >= firstNumber) {
//         console.log(input[i]);
//         firstNumber = input[i]
//     }
// }
// }
function solve(input) {
    let firstNumber = 0
  let output =  input.reduce((a,b) => {
        if(b >= firstNumber) {
            firstNumber=b;
            a.push(firstNumber)
        }
        return a
    }, [])

    console.log(output.join('\n'));
    }



solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )