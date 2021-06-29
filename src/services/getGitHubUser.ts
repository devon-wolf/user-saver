import fetch from 'node-fetch';
import { GHUser } from '../types';

const URL = 'https://api.github.com/users';

export const getGitHubUser  = (user : string) : Promise<GHUser | number> => {
	return fetch(`${URL}/${user}`)
		.then(response =>
			response.ok
				? response.json()
				: response.status)
		.catch(console.error);
};