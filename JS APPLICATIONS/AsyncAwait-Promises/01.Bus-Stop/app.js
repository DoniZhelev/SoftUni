async function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const timeTable = document.getElementById('buses');
    const stopNameElement = document.getElementById('stopName');
   try {
    stopNameElement.textContent = 'Loading...';
    timeTable.innerHTML = ''

       const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
       if(response.status != 200) {
        throw new Error(`${response.status} ${response.statusText}`);
       }
       const data =  await response.json();
      
       stopNameElement.textContent = data.name;
       
       Object.entries(data.buses).forEach(b => {
           const liElement = document.createElement('li');
           liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`
           timeTable.appendChild(liElement)
           
       })
} catch (error) {
    console.log('Error', error);
    stopNameElement.textContent = 'Error';
}
}