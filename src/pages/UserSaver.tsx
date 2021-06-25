import React from 'react';
import SearchForm from '../components/search/SearchForm';
import FeedbackMessage from '../components/search/FeedbackMessage';
import UserList from '../components/users/UserList';
import useUsers from '../hooks/useUsers';

const UserSaver = () => {
	const { users, setUsers } = useUsers();

	return (
		<div>
			<SearchForm setUsers={setUsers} />
			<FeedbackMessage />

			<UserList users={users} />
		</div>
	);
};

export default UserSaver;
