import fetch from 'node-fetch';

const URL = 'https://api.github.com/users';

// TODO improve error handling here
export const getGitHubUser  = async (user : string) : Promise<any> => {
	const response = await fetch(`${URL}/${user}`);

	if (response.status === 200) {
		const json = await response.json();
		return json;
	}

	else {
		return response.status;
	}
};