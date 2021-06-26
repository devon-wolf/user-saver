import React from 'react';
import SearchForm from '../components/search/SearchForm';
import FeedbackMessage from '../components/search/FeedbackMessage';
import UserList from '../components/users/UserList';
import useUsers from '../hooks/useUsers';
import useMessage from '../hooks/useMessage';

const UserSaver = () => {
	const { users } = useUsers();
	const { message, setMessage } = useMessage();

	return (
		<div>
			<SearchForm setMessage={setMessage} />
			<FeedbackMessage message={message} />

			<UserList users={users} />
		</div>
	);
};

export default UserSaver;
