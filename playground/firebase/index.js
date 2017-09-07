import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDkz14IbXY4ZHp2JJJAKofgnNmVFo3vd5M",
    authDomain: "dare-todo-app.firebaseapp.com",
    databaseURL: "https://dare-todo-app.firebaseio.com",
    projectId: "dare-todo-app",
    storageBucket: "dare-todo-app.appspot.com",
    messagingSenderId: "1054643812074"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0'
    },
    isRunning: true,
    user: {
        name: 'Darko',
        age: 29
    }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'Todo 1',
});
todosRef.push({
    text: 'Todo 2',

});
