import { useState, useEffect } from 'react';
import { User } from '../types';
import { useFirebase } from './useFirebase';

// TODO figure out if it should make a fresh GH fetch each time the display is populated, this data can get stale fast as-is; consider just storing a list of usernames and making fetches regularly?

const useUsers = () : {
	users: User[],
	setUsers: React.Dispatch<React.SetStateAction<User[]>>
} => {
	const [users, setUsers] = useState<User[]>([]);
	const { values } = useFirebase();

	const updateUsers = () => {
		if (values) {
			const userValues = values.map(user => {
				return {
					id: user.id,
					url: user.url,
					login: user.login,
					name: user.name,
					public_repos: user.public_repos,
					public_gists: user.public_gists,
					followers: user.followers,
					following: user.following,
					created_at: user.created_at
				};
			});
			setUsers(userValues);
		}
	};
	
	useEffect(() => {
		let isMounted = true;
		if (isMounted) updateUsers();

		return () => {
			isMounted= false;
		};
	}, [values]);

	return {
		users,
		setUsers
	};
};

export default useUsers;