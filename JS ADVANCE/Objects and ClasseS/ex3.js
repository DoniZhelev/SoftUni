function solve(input) {

    let result = {}

    let output = input.map(x=> x.split(' => '))
    .reduce((acc,x) => {
        let currentfruit = x[0];
        let currentQuantity = Number(x[1])
        if(!acc.hasOwnProperty(currentfruit)) {
            acc[currentfruit] = 0;
        }

        acc[currentfruit] += currentQuantity
        if(acc[currentfruit] >= 1000) {
            if(!result.hasOwnProperty[currentfruit])
            result[currentfruit] = 0
        }
        return acc;
    }, {}
    )
  Object.keys(output).forEach(j => {
      if(result[j] !== undefined) {
          result[j] += parseInt(output[j]/1000);
      }
  });
  
  for (const key in result) {
     console.log(`${key} => ${result[key]}`);
  }
}

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)