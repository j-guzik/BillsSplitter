import * as firebase from "firebase";
import '@firebase/auth';
import '@firebase/firestore';

const FirebaseConfig = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyA5P4vKk3s62-R_Pw5Ik5ewedxl920iqY0",
        authDomain: "billssplitter-70b40.firebaseapp.com",
        projectId: "billssplitter-70b40",
        storageBucket: "billssplitter-70b40.appspot.com",
        messagingSenderId: "39416781667",
        appId: "1:39416781667:web:e92f7c80cd23f0a2429156"
    }

    const firebaseApp = firebase.initializeApp(firebaseConfig);
};

export default FirebaseConfig;