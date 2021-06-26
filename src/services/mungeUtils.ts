import { User, GHUser } from '../types';
import { convertDate } from './convertDate';

export const shapeUserData = (user : GHUser) : User => {
	return {
		id: user.id,
		url: user.html_url,
		login: user.login,
		name: user.name,
		public_repos: user.public_repos,
		public_gists: user.public_gists,
		followers: user.followers,
		following: user.following,
		created_at: convertDate(user.created_at)
	};
};