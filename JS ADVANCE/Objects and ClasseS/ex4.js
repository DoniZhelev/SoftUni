function solve(input) {
    const catalogue = {};
    let letter = '';
    input.forEach(element => {
        let [product, price] = element.split(' : ');
        catalogue[product] = Number(price);
    });
 
    let sortedCatalogue = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));
    for (const product of sortedCatalogue) {
 
        if (letter !== product[0]) {
            letter = product[0];
            console.log(letter);
        }
        console.log(`${product}: ${catalogue[product]}`);
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
])