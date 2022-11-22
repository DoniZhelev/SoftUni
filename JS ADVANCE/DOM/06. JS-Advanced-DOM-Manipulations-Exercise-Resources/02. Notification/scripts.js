function notify(message) {
   let divNote = document.getElementById('notification');
   divNote.textContent = message;
   divNote.style.display = 'block';

   setTimeout(() => {
       divNote.style.display = 'none'
   },2000)
}