import firebase from 'firebase/app';
import 'firebase/database';
import { useEffect, useState } from 'react';
import { User } from '../types';

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

type UseFirebaseProps = {
	setUsers: React.Dispatch<React.SetStateAction<User[]>>
};

export const useFirebase = ({ setUsers } : UseFirebaseProps) : void => {
	const [mounted, setMounted] = useState(true);
	const updateUsers = (snapshot : firebase.database.DataSnapshot) : void => {
		const snapshotUsers = snapshot.val();
		const newUsers = [];
		
		// TODO determine if this looping is as inefficient as I suspect it is
		for (const user in snapshotUsers) {
			const {
				id,
				url,
				login,
				name,
				public_repos,
				public_gists,
				followers,
				following,
				created_at
			} = snapshotUsers[user];
	
			newUsers.push({
				id,
				url,
				login,
				name,
				public_repos,
				public_gists,
				followers,
				following,
				created_at
			});
		}
	
		if (mounted) setUsers(newUsers);
	};

	useEffect(() => {
		usersRef.on('value', updateUsers);
	
		return () => {
			usersRef.off('value', updateUsers);
			setMounted(false);
		};
	}, []);
};

