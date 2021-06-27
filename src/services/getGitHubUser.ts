import fetch from 'node-fetch';
import { GHUser } from '../types';

const URL = 'https://api.github.com/users';

// TODO improve error handling here
export const getGitHubUser  = async (user : string) : Promise<GHUser | number> => {
	const response = await fetch(`${URL}/${user}`);

	if (response.status === 200) {
		const json : GHUser = await response.json();
		return json;
	}

	else {
		return response.status;
	}
};