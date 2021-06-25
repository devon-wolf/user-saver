import React from 'react';
import UserItem from './UserItem';
import { User } from '../../types';


type UserListProps = {
	users : User[]
};

const UserList = ({ users } : UserListProps) => {

	return (
		<table>
			<thead>
				<th>Username</th>
				<th>Name</th>
				<th>Public Repos</th>
				<th>Public Gists</th>
				<th>Followers</th>
				<th>Following</th>
				<th>Created at</th>
			</thead>
			{users.map(user => 
			<tr key={user.id}>
				<UserItem user={user} />
			</tr>)}
		</table>
	);
};

export default UserList;
