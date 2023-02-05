function solve(arr, string) {
    let result = '';

    for (const item of arr) {
        result += item + string;
    }
    console.log(result.slice(0,-1));
}

solve(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_' )