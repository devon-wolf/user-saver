import React from 'react';
import { User } from '../../types';

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
			<td aria-label="username">
				<a aria-label="link to GitHub" href={url}>
					{login}
				</a>
			</td>
			<td aria-label="name">
				{name ? name : 'n/a'}
			</td>
			<td aria-label="public repos">
				{public_repos}
			</td>
			<td aria-label="public gists">
				{public_gists}
			</td>
			<td aria-label="followers">
				{followers}
			</td>
			<td aria-label="following">
				{following}
			</td>
			<td aria-label="created at">
				{created_at}
			</td>
		</>
	);
};

export default UserItem;
