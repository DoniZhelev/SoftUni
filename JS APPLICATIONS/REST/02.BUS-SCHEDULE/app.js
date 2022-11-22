function solve() {
const url = 'https://judgetests.firebaseio.com/schedule/';
let stopId = 'depot';
let stopName;
const info = document.getElementById('info');

    function clickTheButton() {
        const departDis = document.getElementById('depart');
        const arriveDis = document.getElementById('arrive');
        if(departDis.disabled) {
            departDis.disabled = false;
            arriveDis.disabled = true;
        } else {
            departDis.disabled = true;
            arriveDis.disabled = false;
        }
    }

    function depart() {
     const mainUrl = `${url}${stopId}.json`;
     fetch(mainUrl).then(response => response.json())
     .then(data => {
         info.textContent = `Next stop ${data.name}`
    stopId = data.next;
    stopName = data.name;

     })
     .catch(()=> {
         info.textContent = 'ERROR';
     });
    }
    clickTheButton()

    function arrive() {
       info.textContent = `Arriving at ${stopName}`;
       clickTheButton()
    }

    return {
        depart,
        arrive
    };
}

let result = solve();

