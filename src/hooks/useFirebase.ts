import firebase from 'firebase/app';
import 'firebase/database';
import { useListVals } from 'react-firebase-hooks/database';

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

export const usersRef = firebase.database().ref('users');

export const useFirebase = () : {
    values: any[] | undefined;
    loading: boolean;
    error: firebase.FirebaseError | undefined;
} => {
	const [values, loading, error] = useListVals(usersRef);
	return { values, loading, error };
};
