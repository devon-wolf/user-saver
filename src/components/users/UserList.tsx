import React from 'react';
import UserItem from './UserItem';

type UserListProps = {
	users : string[]
};

const UserList = ({ users } : UserListProps) => {

	return (
		<ul>
			{users.map((user : string) => 
			<li key={user}>
				<UserItem user={user} />
			</li>)}
		</ul>
	);
};

export default UserList;
