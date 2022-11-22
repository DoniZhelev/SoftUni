 function solve(input) {

    let delimeter = input.pop();
    let output = ''
  for ( let i = 0; i < input.length; i ++) {
      if(i !== input.length - 1) {

          output += input[i] + delimeter;
      } else {
        output += input[i]
      }
  }
console.log(output);
 }
 solve(['One', 
 'Two', 
 'Three', 
 'Four', 
 'Five', 
 '-']
 )
