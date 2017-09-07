import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyDkz14IbXY4ZHp2JJJAKofgnNmVFo3vd5M",
        authDomain: "dare-todo-app.firebaseapp.com",
        databaseURL: "https://dare-todo-app.firebaseio.com",
        projectId: "dare-todo-app",
        storageBucket: "dare-todo-app.appspot.com",
        messagingSenderId: "1054643812074"
    };
    
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
