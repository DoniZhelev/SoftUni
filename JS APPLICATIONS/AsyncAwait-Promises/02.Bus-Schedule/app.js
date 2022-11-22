function solve() {

    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    const infoTable = document.querySelector('#info span');
   
    let data = {
        next: 'depot'
    };
    
    
    async function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${data.next}`
        const response = await fetch(url)

         data = await response.json();
        infoTable.textContent = `Next stop ${data.name}`
        departButton.disabled = true;
        arriveButton.disabled = false;
    }

    function arrive() {
        infoTable.textContent = `Arriving at ${data.name}`
        arriveButton.disabled = true;
        departButton.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();