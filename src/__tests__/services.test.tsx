import { convertDate } from '../services/convertDate';
import { getGitHubUser } from '../services/getGitHubUser';

// implementation tests, included for sake of testing everything I could think of but I wouldn't likely include these in a primary set of tests

it('takes a date string as formatted by the GitHub API and reformats it to MM/DD/YYYY', () => {
	const exampleDate = '2017-11-25T18:38:54Z';

	expect(convertDate(exampleDate)).toEqual('11/25/2017');
});

describe('getGitHubUser', () => {
	// checking the actual user data gets stale fast
	it('returns a user object if given an existing user', () => {
		return getGitHubUser('devon-wolf')
			.then(result => expect(typeof result === 'number').toBeFalsy());
	});

	it('returns the response status code if given a nonexisting user', () => {
		return getGitHubUser('averyveryfakeuser')
			.then(result => expect(result).toEqual(404));
	});
});