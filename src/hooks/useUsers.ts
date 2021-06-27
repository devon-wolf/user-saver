import { useState, useEffect } from 'react';
import { User } from '../types';
import { useFirebaseUsers } from './useFirebase';

// TODO consider that the GH data gets stale, maybe add a time stamp or a fresh fetch option

const useUsers = () : {
	users: User[],
	setUsers: React.Dispatch<React.SetStateAction<User[]>>
} => {
	const [users, setUsers] = useState<User[]>([]);
	const { values } = useFirebaseUsers();
	
	useEffect(() => {
		values ? setUsers(values) : setUsers([]);
	}, [values]);

	return {
		users,
		setUsers
	};
};

export default useUsers;
