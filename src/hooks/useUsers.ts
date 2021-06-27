import { useState } from 'react';
import { User } from '../types';
import { useFirebase } from './useFirebase';

// TODO figure out if it should make a fresh GH fetch each time the display is populated, this data can get stale fast as-is; consider just storing a list of usernames and making fetches regularly?

const useUsers = () : {
	users: User[],
	setUsers: React.Dispatch<React.SetStateAction<User[]>>
} => {
	
	const [users, setUsers] = useState<User[]>([]);

	useFirebase({ setUsers });

	return {
		users,
		setUsers
	};
};

export default useUsers;