function search() {
   const cities = Array.from(document.querySelectorAll('ul li'));
   const text = document.getElementById('searchText').value;
   let matches = 0;

   cities.forEach((city) => {
    if(city.innerHTML.includes(text)) {
        city.style.fontWeigh = 'bold';
        city.style.textDecoration ='underline';
        matches++;
    } else {
        city.style.fontWeigh = 'normal';
        city.style.textDecoration = '';
    }
   })
   console.log(document.querySelector('li').innerHTML);
   document.getElementById('result').textContent = `${matches} matches found`

}
