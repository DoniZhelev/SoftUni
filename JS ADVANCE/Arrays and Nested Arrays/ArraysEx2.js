function solve(input) {

    let step = Number(input.pop());

    for(let i = 0; i < input.length; i++) {
        console.log(input[i]);
        i += step - 1
    }
}

solve(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
)