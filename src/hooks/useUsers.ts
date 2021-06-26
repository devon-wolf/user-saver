import { useState, useEffect } from 'react';
import { User } from '../types';
import { usersRef } from '../services/firebaseUtils';

// TODO figure out if it should make a fresh GH fetch each time the display is populated, this data can get stale fast as-is; consider just storing a list of usernames and making fetches regularly?
const useUsers = () => {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		usersRef.on('value', snapshot => {
			const snapshotUsers = snapshot.val();
			const newState = [];
			
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
				});
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