function solve(){
   let clicked;
   let tr = document.getElementsByTagName('tr');

   [...tr].forEach(row => {
      row.addEventListener('click', (event) => {
         let element = event.target.parentNode.style;
         if(element.backgroundColor == '' || element.backgroundColor == undefined  ) {
            element.backgroundColor = "#413f5e"
            if(clicked) {
               clicked.backgroundColor = ''
            }
         } else {
            element.backgroundColor = ''
         }
         clicked = element
      })
   
   })
}
