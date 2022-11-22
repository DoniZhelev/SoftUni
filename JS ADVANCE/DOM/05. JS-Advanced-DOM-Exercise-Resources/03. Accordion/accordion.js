function toggle() {
   let buton = document.getElementsByClassName('button')[0];
   let info = document.getElementById('extra');
   if(buton.textContent == 'More') {
       info.style.display = 'block';
       buton.textContent = 'Less'; 

   } else {
       buton.textContent = 'More';
       info.style.display =   'none'
   }

}