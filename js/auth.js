class Auth {

    async login(email, password) {
        await firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            return Promise.reject(error);
        });
        /**/
    }

    async signUp(email, password) {
        await firebase.auth().createUserWithEmailAndPassword('sidni@i.ua', '12345678').catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // ...
        });
    }

    async logout() {
        let status = await new Promise(function (resolve, reject) {
            firebase.auth().signOut()
                .then(function () {
                    resolve(true);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
        return status;
    }
    async getUser1() {
        let currentUser = null;
        let b = await firebase.auth().onAuthStateChanged(function (user) {
            if(user) {
                currentUser = user;
            } else {
                currentUser = false;
            }
        });

        return await b();
    }
    async getUser() {
        let user = await new Promise(function (resolve, reject) {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    resolve(Auth.mapData(user));
                } else {
                    reject(Error('It broke'));
                }
            });
        });
        return user;
    }
    static mapData (user) {
        let data = {};
        data.name = user.displayName;
        data.email = user.email;
        data.emailVerified = user.emailVerified;
        data.photoURL = user.photoURL;
        data.isAnonymous = user.isAnonymous;
        data.uid = user.uid;
        data.providerData = user.providerData;
        return data;
    }
}