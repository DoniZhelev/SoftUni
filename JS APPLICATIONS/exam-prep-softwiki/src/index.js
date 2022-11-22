import {createPage, detailsPage, editPage, homePage, postCreate} from './controllers/catalog.js'
import { registerPage, loginPage, postRegister, postLogin } from './controllers/user.js';
import * as api from './data.js'
import { getUserData } from './util.js';

window.api = api

const app = Sammy('#root', function(context){

    this.use('Handlebars', 'hbs')

    const user = getUserData();
    this.userData = user;

    this.get('/', homePage);
    this.get('/home', homePage);
    this.get('/details/:id',detailsPage );
    this.get('/create', createPage);
    this.get('/edit/:id', editPage);

    this.get('/register', registerPage);
    this.get('/login', loginPage);

    this.post('/create', (context) => {postCreate(context); });
    this.post('/edit/:id', (context) => {postEdit(context); });

    this.post('/register', (context) => {postRegister(context); });
    this.post('/login', (context) => {postLogin(context); });
});

app.run();