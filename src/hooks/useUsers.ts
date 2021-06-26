import { useState, useEffect } from 'react';
import { User } from '../types';
import { usersRef } from '../services/firebaseUtils';

const useUsers = () => {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		usersRef.on('value', snapshot => {
			let snapshotUsers = snapshot.val();
			let newState = [];
			
			for (let user in snapshotUsers) {
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

				newState.push({
					id,
					url,
					login,
					name,
					public_repos,
					public_gists,
					followers,
					following,
					created_at
				})
			};

			setUsers(newState);
		});
		
	}, []);

	return {
		users,
		setUsers
	};
};

export default useUsers;