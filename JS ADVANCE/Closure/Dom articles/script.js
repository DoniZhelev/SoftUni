function getArticleGenerator(articles) {
   
   const resultDiv = document.getElementById('content');

   return () => {
    if (articles.length != 0 ) {
        const article = document.createElement('article');
        article.textContent = articles.shift();
        resultDiv.appendChild(article)
    }
   }
}
