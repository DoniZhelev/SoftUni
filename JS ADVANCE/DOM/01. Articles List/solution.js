function createArticle() {
	
	let titleInputDoc = document.getElementById('createTitle');
	let contentInputDoc	= document.getElementById('createContent');

	let headingElement = document.createElement('h3');
	headingElement.innerHTML = titleInputDoc.value;

	let contentElement = document.createElement('p');
	contentElement.innerHTML =contentInputDoc.value;

	let articleElement = document.createElement('article');
	articleElement.appendChild(headingElement);
	articleElement.appendChild(contentElement)

	let articleSectionElement = document.getElementById('articles');
	articleSectionElement.appendChild(articleElement)
}