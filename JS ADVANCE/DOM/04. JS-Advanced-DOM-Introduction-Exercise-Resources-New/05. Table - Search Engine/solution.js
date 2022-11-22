function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
       let input = (document.getElementById('searchField').value).toLowerCase();
       let elements = Array.from(document.querySelectorAll('tbody tr'))
       console.log(elements);
       elements.forEach((el) => {
         let text = el.textContent.toLowerCase();
         if(text.includes(input)) {
            el.classList.add('select')
         } else {
            el.classList.remove('select')
         }
       })


       document.getElementById('searchField').value = '';
      }
}