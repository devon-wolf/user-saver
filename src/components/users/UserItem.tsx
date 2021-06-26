import React from 'react';
import { User } from '../../types';
import { convertDate } from '../../services/convertDate';

type UserProps = {
	user : User
};

const UserItem = ({ user } : UserProps) => {
	const {
		url,
		login,
		name,
		public_repos,
		public_gists,
		followers,
		following,
		created_at
	} = user;

	return (
		<>
			<td>
				<a href={url}>{login}</a>
			</td>
			<td>
				<span>{name ? name : 'n/a'}</span>
			</td>
			<td>
				<span>{public_repos}</span>
			</td>
			<td>
				<span>{public_gists}</span>
			</td>
			<td>
				<span>{followers}</span>
			</td>
			<td>
				<span>{following}</span>
			</td>
			<td>
				<span>{convertDate(created_at)}</span>
			</td>
		</>
	);
};

export default UserItem;
