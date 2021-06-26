import { convertDate } from '../services/convertDate';
import { getGitHubUser } from '../services/getGitHubUser';
import { gitHubUser } from '../data/sampleData';

it('takes a date string as formatted by the GitHub API and reformats it to MM/DD/YYYY', () => {
	const exampleDate = '2017-11-25T18:38:54Z';

	expect(convertDate(exampleDate)).toEqual('11/25/2017');
});

describe('getGitHubUser', () => {
	it('returns a user object if given an existing user', () => {
		return getGitHubUser('devon-wolf')
			.then(result => expect(result).toEqual(gitHubUser));
	});

	it('returns the response status code if given a nonexisting user', () => {
		return getGitHubUser('averyveryfakeuser')
			.then(result => expect(result).toEqual(404));
	});
});