function getInfo() {
   
    let stopId = document.getElementById('stopId');
    let busses = ['1287','1308','1327','2334'];
    let stopName = document.getElementById('stopName');
    let bussesLines = document.getElementById('buses')

    if(!busses.includes(stopId.value)) {
        stopName.textContent = 'Error';
        bussesLines.textContent = '';
        return;
    }

    const url = `https://judgetests.firebaseio.com/businfo/${stopId.value}.json`

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        stopName.textContent = data.name;
        Object.keys(data.buses).forEach(key => {
            let li = document.createElement('li');
            li.textContent = `Bus ${key} arrives in ${data.buses[key]} minutes`
            bussesLines.appendChild(li)
        })
        stopId.value = '';
    });
}