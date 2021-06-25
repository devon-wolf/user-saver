import fetch from 'node-fetch';

const URL = 'https://api.github.com/users';

export const getGitHubUser = (user : string) => {
	return fetch(`${URL}/${user}`)
		.then(response => response.json())
		.catch(error => ({ error }));
};