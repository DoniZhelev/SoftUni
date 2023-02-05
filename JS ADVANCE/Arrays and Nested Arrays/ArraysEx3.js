function solve(input) {

let output = [];

   for (let i = 0; i < input.length; i++) {
    if(input[i] === 'add') {
      output.push(i + 1)
    } else if (input[i]=== 'remove') {
        output.pop()
    }

   }
  if(output.length > 0) {
      console.log(output.join('\n'));
  } else {
      console.log('Empty');
  }
}

solve(['add', 
'add', 
'remove', 
'add', 
'add']

)