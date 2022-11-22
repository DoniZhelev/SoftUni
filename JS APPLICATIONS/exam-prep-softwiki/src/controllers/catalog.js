import { addPartials, mapCategories} from '../util.js';
import {createArticle, getAll, getbyId} from '../data.js';


export async function homePage() {
    await addPartials(this);
   this.partials.article = await this.load('/templates/catalog/article.hbs');
    
   const data = mapCategories(await getAll());
    const context = data;
    
        context.user = this.app.userData;
    


    this.partial('/templates/catalog/homePage.hbs', context);
}

export async function detailsPage() {
    await addPartials(this);

    const article = await  getbyId(this.params.id);
    const content = {
        user: this.app.userData,
        article
    };

    this.partial('/templates/catalog/detailsPage.hbs', context);
    
}

export async function createPage(){
    await addPartials(this);
    const context = {
        user: this.app.userData

    };
    this.partial('/templates/catalog/createPage.hbs', context);
}

export async function postCreate(context) {
    const {title, category, content } = context.params;
    try {   
        if(title.length == 0 || category.length == 0 || content.length == 0) {
           throw new Error('All fields are required!');
       } else if (categoryMap.hasOwnProperty(category) === false) {
        throw new Error('Invalid category!')
       }  else {
           const result  = await createArticle({
            title,
            category,
            content
           });
          
           context.redirect('/home');
       }
   } catch (err) {
       alert(err.message);
   }
}

export async function editPage() {
    await addPartials(this);

    const article = await getbyId(this.params.id)
    const context ={
        user: this.app.userData,
        article
    };
    this.partial('/templates/catalog/editPage.hbs', context);
}