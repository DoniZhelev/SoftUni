function create(words) {
  
   let content = document.getElementById('content');
   words.forEach(par => {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = par;
      p.style.display = 'none';

      div.addEventListener('click', () =>{
         p.style.display = 'block';
      });
      div.appendChild(p);
      content.appendChild(div);
   });
}