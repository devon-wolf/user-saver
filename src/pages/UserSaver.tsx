import React from 'react';
import SearchForm from '../components/search/SearchForm';
import FeedbackMessage from '../components/search/FeedbackMessage';
import UserList from '../components/users/UserList';
import useMessage from '../hooks/useMessage';
import './UserSaver.css';

const UserSaver = () : JSX.Element => {
	const { message, setMessage } = useMessage();

	return (
		<div className="userSaver">
			<SearchForm setMessage={setMessage} />
			<FeedbackMessage message={message} />

			<UserList />
		</div>
	);
};

export default UserSaver;
