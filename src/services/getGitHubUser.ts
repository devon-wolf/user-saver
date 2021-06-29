import fetch from 'node-fetch';
import { GHUser } from '../types';

export const getGitHubUser  = (user : string) : Promise<GHUser | number> => {
	return fetch(`https://api.github.com/users/${user}`)
		.then(response =>
			response.ok
				? response.json()
				: response.status)
		.catch(console.error);
};