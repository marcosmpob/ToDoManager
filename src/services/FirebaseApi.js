import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDtVC3VQ1Z8XzQYDkWwnTOC_NFo8ny5c90",
    authDomain: "todomanager-5444a.firebaseapp.com",
    databaseURL: "https://todomanager-5444a.firebaseio.com",
    projectId: "todomanager-5444a",
    storageBucket: "todomanager-5444a.appspot.com",
    messagingSenderId: "254572727152"
};

export const initializeFirebaseApi = () => firebase.initializeApp(config);

export const createUserOnFirebaseAsync = async (email, password) => {
    const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
    return user;
}

export async function signInOnFirebaseAsync(email, password) {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    return user;
}

export const currentFirebaseUser = () => {
    return new Promise((resolve, reject) => {
        var unsubscribe = null;
        unsubscribe = firebase
            .auth()
            .onAuthStateChanged((user) => {
                resolve(user);
            }, (error) => {
                reject(error);
            }, () => {
                unsubscribe();
            });
    });
}

export const writeTaskOnFirebaseAsync = async (task) => {
    const user = await currentFirebaseUser();
    var tasksReference = firebase
        .database()
        .ref(user.uid);
    const key = tasksReference
        .child('tasks')
    89
        .push()
        .key;
    return await tasksReference
        .child(`tasks/${key}`)
        .update(task);
}