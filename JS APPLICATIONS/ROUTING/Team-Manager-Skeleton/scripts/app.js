const UserModel = firebase.auth();
const DB = firebase.firestore()
const app = Sammy('#main', function () {
    this.use('Handlebars', 'hbs');
    this.get('/home', function (context) {
        const userInfo = localStorage.getItem('userInfo');

        if(userInfo) {
            const {uid, email} = JSON.parse(userInfo);
            context.loggedIn = true;
            context.email = email;
        }
        loadPartials(context).then(function(){
            
            this.partial('./templates/home/home.hbs');
        });
    });
    this.get('/about', function(context){
        const userInfo = localStorage.getItem('userInfo');

        if(userInfo) {
            const {uid, email} = JSON.parse(userInfo);
            context.loggedIn = true;
            context.email = email;
        }

        loadPartials(context).then(function(){
            this.partial('./templates/about/about.hbs');
        });
    });

    this.get('/catalog', function(context){
        const userInfo = localStorage.getItem('userInfo');
        if(userInfo) {
            const {uid, email} = JSON.parse(userInfo);
            context.loggedIn = true;
            context.email = email;
        }
        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs',
            'team': './templates/catalog/team.hbs'
        }).then(function(){
            this.partial('./templates/catalog/teamCatalog.hbs')
        })
    })

    this.get('/login', function*(context){
        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs',
            'loginForm': './templates/login/loginForm.hbs'
        }),then(function (){
            this.partial('./templates/login/loginPage.hbs');
            
        });
    });

    this.get('/register', function(){
        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs',
            'registerForm': './templates/register/registerForm.hbs'
        }).then(function(){
            this.partial('./templates/register/registerPage.hbs')
        })
    });
    this.get('/logout', function(context){
        UserModel.signOut()
        .then((response)=>{
            localStorage.removeItem('userInfo');
            context.redirect('/home');
        })
        .catch((e)=> console.log(e))
    })
    this.post('/register', function(context){
        const {email,password, repeatPassword} = context.params;

        if(password !== repeatPassword) {
            return;
        }
        UserModel.createUserWithEmailAndPassword(email, password)
        .then((createdUser) => {
            this.redirect('/login');
        })
        .catch((e)=> console.log(e))
    });

    this.post('/login', function(context){
        const { email, password} = context.params;
        UserModel.signInWithEmailAndPassword(email,password)
        .then((userInfo) =>{
            console.log(userInfo);
        })
        .catch((e) => console.log(e))
    })
});

(() =>{
    app.run('/home');
})();
function loadPartials(context) {
    return context.loadPartials({
        'header': './templates/common/header.hbs',
        'footer': './templates/common/footer.hbs'
    })
}