function solve (input) {

    let rotates = Number(input.pop());

    for( let i = 0; i < rotates % input.length; i++) {
        input.unshift(input.pop())
      
    }
    console.log(input.join(' '));
}

solve(['1', 
'2', 
'3', 
'4', 
'2']


)