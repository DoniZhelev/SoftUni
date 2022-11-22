function solve(input) {
    
    let output  = '<table>\n'

    let employees = []    
    input.forEach(x => {
        employees.push(JSON.parse(x))
    } )
output += arrayOftable(employees) + '</table>';

console.log(output);

function arrayOftable() {
    let result = ''
    employees.forEach(e => {
        result +=  '<tr>\n';

        Object.values(e).forEach(v => {
            result += `<td>${v}</td>\n`
        })
        result += '</tr>\n'
    })
   
    return result;
}
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']


)