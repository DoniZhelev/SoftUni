function solve(inp) {
    let car = {};

    for(let row of inp) {
        let [brand, model, qtty] = row.split(' | ');
        qtty = Number(qtty);

        if(car[brand]) {
            for(let mod in car[brand]) {
                if(mod === model) {
                    car[brand][model] += qtty;
                } 
                if(!car[brand][model]) {
                    car[brand][model] = qtty;
                }
            }

        } else {
            car[brand] = {[model]: qtty};
        }
    }
    
    for(let brand in car) {
        console.log(brand);
        let kvp = Object.entries(car[brand]);
        kvp.forEach(c => console.log(`###${c[0]} -> ${c[1]}`));
    }
    
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)