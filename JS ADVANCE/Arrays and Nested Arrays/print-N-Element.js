function solve(arr, step) {
    let result = [];

    for (let i = 0; i < arr.length; i += step) {
        result[result.length] = arr[i]
        
    }
    console.log(result);
}

solve(['5','20','31','4','20'],2)

solve(['1', '2', '3', '4', '5'], 6)