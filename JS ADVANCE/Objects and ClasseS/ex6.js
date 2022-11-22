function solve(input) {
    const register = {};
    input.forEach(element => {
        let [system, component, subcomponent] = element.split(' | ');
        if (!register[system]) {
            register[system] = {};
        }
        if (!register[system][component]) {
            register[system][component] = [];
        }
        register[system][component].push(subcomponent);
    });
    const sortedSystems = Object.keys(register).sort((a, b) => Object.keys(register[b]).length - Object.keys(register[a]).length || a.localeCompare(b));

    for (const system of sortedSystems) {
        console.log(system);
        const sortedComponents = Object.keys(register[system]).sort((a, b) => register[system][b].length - register[system][a].length);
        for (const component of sortedComponents) {
            console.log(`|||${component}`);
            register[system][component].forEach(x => console.log(`||||||${x}`));
        }
    }
}