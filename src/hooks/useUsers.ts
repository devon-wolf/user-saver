import { useState } from 'react';
import { User } from '../types';

const useUsers = () => {
	const [users, setUsers] = useState<User[]>([]);

	return {
		users,
		setUsers
	};
};

export default useUsers;