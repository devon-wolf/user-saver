import React from 'react';
import SearchForm from '../components/search/SearchForm';
import FeedbackMessage from '../components/search/FeedbackMessage';
import UserList from '../components/users/UserList';
import useMessage from '../hooks/useMessage';

const UserSaver = () : JSX.Element => {
	const { message, setMessage } = useMessage();

	return (
		<div>
			<SearchForm setMessage={setMessage} />
			<FeedbackMessage message={message} />

			<UserList />
		</div>
	);
};

export default UserSaver;
