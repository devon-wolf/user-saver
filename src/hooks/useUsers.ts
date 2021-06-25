import { useState } from 'react';

const useUsers = () => {
	const [users, setUsers] = useState<string[]>([]);

	return {
		users,
		setUsers
	}
};

export default useUsers;