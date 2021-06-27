import React from 'react';
import UserItem from './UserItem';
import useUsers from '../../hooks/useUsers';

const UserList = () : JSX.Element => {
	const { users } = useUsers();

	return (
		<table>
			<thead>
				<tr>
					<th>Username</th>
					<th>Name</th>
					<th>Public Repos</th>
					<th>Public Gists</th>
					<th>Followers</th>
					<th>Following</th>
					<th>Created at</th>
				</tr>
			</thead>

			<tbody>
				{users.map(user => 
					<tr aria-label="user row" key={user.id}>
						<UserItem user={user} />
					</tr>)}
			</tbody>
		</table>
	);
};

export default UserList;
