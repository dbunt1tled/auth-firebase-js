const Firebase = (function () {
    const config = {
        apiKey: "AIzaSyA9XGA_mF3IwcC6OCDL09W1LLOayZgZsEY",
        authDomain: "test-4154e.firebaseapp.com",
        databaseURL: "https://test-4154e.firebaseio.com",
        projectId: "test-4154e",
        storageBucket: "test-4154e.appspot.com",
        messagingSenderId: "895419732638",
    };
    firebase.initializeApp(config);
    const db = firebase.firestore();
    db.settings({
        timestampsInSnapshots: true
    });
    let instance;
    getDB = function () {
        return db;
    }
    const createInstance = function () {
        return {
            getDB,
        }
    }
    return {
        getInstance: function () {
            return instance || (instance = createInstance());
        }
    }
} ());