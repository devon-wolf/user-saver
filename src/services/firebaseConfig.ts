import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: 'usersaver-928a1.firebaseapp.com',
	projectId: 'usersaver-928a1',
	storageBucket: 'usersaver-928a1.appspot.com',
	messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
	,
	appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const usersRef = firebase.database().ref('users');

export default usersRef;

