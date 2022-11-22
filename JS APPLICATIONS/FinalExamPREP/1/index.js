
const userModel = firebase.auth();
const db = firebase.firestore();

const app = Sammy('#root', function () {       
    this.use('Handlebars', 'hbs');

    //home route:
    this.get('#/home', function (context) {
        db.collection('destinations').get()
            .then((response) => {
                context.destinations = response.docs.map((dest) => { return { id: dest.id, ...dest.data() } });

                extendContext(context)
                    .then(function () {
                        this.partial('./templates/home.hbs');
                    })
            })
        //     .catch(errorHandler); //TODO: consolo errror??
    });

    this.get('#/destinations', function (context) {

        db.collection('destinations').get()
            .then((res) => {
                context.destinations = res.docs.map((dest) => { return { id: dest.id, ...dest.data(), isOwner: true } });
                context.destinations.forEach(d => {
                    d.isOwner = (Boolean(d.owner == getUserData().uid));
                });
                extendContext(context)
                    .then(function () {
                        this.partial('./templates/destinations.hbs');
                    })
            })
    });

    // //user routes:
    this.get('#/register', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('./templates/register.hbs');
            })
    });

    this.post('#/register', function (context) {
        const { email, password, rePassword } = context.params;
        if (password !== rePassword || !RegExp('.+@.+\..+').test(email)) {
           console.log('NOPE');
            return;
        }
        userModel.createUserWithEmailAndPassword(email, password)
        .then(userData => {
            saveUserData(userData);
            this.redirect('#/home');
        })
        .catch(errorHandler);
    });


    this.get('#/login', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('./templates/login.hbs');
            })
    })

    this.post('#/login', function (context) {
        const { email, password } = context.params;
        if (!password) {
            return;
        }
        userModel.signInWithEmailAndPassword(email, password)
            .then(userData => {
                saveUserData(userData);
                this.redirect('#/home');
            })
            .catch(errorHandler);
    });

    this.get('#/logout', function () {
        userModel.signOut()
            .then(() => {
                clearUserData();
                this.redirect('#/login');
            })
            .catch(errorHandler);
    })

    //creation routes:
    this.get('#/create', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('./templates/create.hbs');
            })
    });

    this.post('#/create', function (context) {
        const { destination, city, duration, departureDate, imgUrl } = context.params;
        console.log(context);

        if (duration>100 || duration <1) {
            return;
        }
        db.collection('destinations').add({
            destination,
            city,
            duration,
            departureDate,
            imgUrl,
            owner: getUserData().uid,
        })
            .then(() => {
                this.redirect('#/home');
            })
            .catch(errorHandler);
    });

    this.get('#/details/:destId', function (context) {
        const { destId } = context.params;
        db.collection('destinations')
            .doc(destId)
            .get()
            .then((response) => {
                const actualOfferData = response.data();
                context.dest = { ...actualOfferData, id: destId };

                extendContext(context)
                    .then(function () {
                        this.partial('./templates/details.hbs');
                    })
            });
    });

    this.get('#/delete/:destId', function (context) {

        const { destId } = context.params;
        db.collection('destinations').doc(destId).delete()
            .then(() => {
                this.redirect('#/destinations');
            })
            .catch(errorHandler);
    });

    this.get('#/edit/:destId', function (context) {
        const { destId } = context.params;

        db.collection('destinations')
            .doc(destId)
            .get()
            .then((res) => {
                context.dest = { ...res.data(), id: destId }
                extendContext(context)
                    .then(function () {
                        this.partial('./templates/edit.hbs');
                    })
            });

    });

    this.post('#/edit/:destId', function (context) {
        const { destId, destination, city, duration, departureDate, imgUrl } = context.params;

        db.collection('destinations')
            .doc(destId)
            .get()
            .then((res) => {
                db.collection('destinations')         
                    .doc(destId)
                    .set({
                        ...res.data(),
                        destination,
                        city,
                        duration,
                        departureDate,
                        imgUrl,
                    })
            })
            .then((res) => {
                this.redirect(`#/details/${destId}`);
            })
            .catch(errorHandler);
    })
});

(() => {
    app.run('#/home');
})();

function extendContext(context) {
    context.isLoggedIn = Boolean(getUserData());                    
    context.userEmail = getUserData() ? getUserData().email : '';   

    return context.loadPartials({
        'header': './partials/header.hbs',
        'footer': './partials/footer.hbs'
    })
};

function errorHandler(error) {
    console.log(error);
}

function saveUserData(data) {
    const { user: { email, uid } } = data;
    localStorage.setItem('user', JSON.stringify({ email, uid }));
}

function getUserData() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

function clearUserData() {
    localStorage.removeItem('user');
}