import { convertDate } from './convertDate';
import { getGitHubUser } from './githubFetch';

it('takes a date string as formatted by the GitHub API and reformats it to MM/DD/YYYY', () => {
	const exampleDate = '2017-11-25T18:38:54Z';

	expect(convertDate(exampleDate)).toEqual('11/25/2017');
});

describe('getGitHubUser', () => {
	it('returns a user object if given an existing user', () => {
		return getGitHubUser('devon-wolf')
			.then(result => expect(result).toEqual({
				"login": "devon-wolf",
				"id": 33987744,
				"node_id": "MDQ6VXNlcjMzOTg3NzQ0",
				"avatar_url": "https://avatars.githubusercontent.com/u/33987744?v=4",
				"gravatar_id": "",
				"url": "https://api.github.com/users/devon-wolf",
				"html_url": "https://github.com/devon-wolf",
				"followers_url": "https://api.github.com/users/devon-wolf/followers",
				"following_url": "https://api.github.com/users/devon-wolf/following{/other_user}",
				"gists_url": "https://api.github.com/users/devon-wolf/gists{/gist_id}",
				"starred_url": "https://api.github.com/users/devon-wolf/starred{/owner}{/repo}",
				"subscriptions_url": "https://api.github.com/users/devon-wolf/subscriptions",
				"organizations_url": "https://api.github.com/users/devon-wolf/orgs",
				"repos_url": "https://api.github.com/users/devon-wolf/repos",
				"events_url": "https://api.github.com/users/devon-wolf/events{/privacy}",
				"received_events_url": "https://api.github.com/users/devon-wolf/received_events",
				"type": "User",
				"site_admin": false,
				"name": null,
				"company": null,
				"blog": "",
				"location": null,
				"email": null,
				"hireable": null,
				"bio": null,
				"twitter_username": null,
				"public_repos": 80,
				"public_gists": 0,
				"followers": 30,
				"following": 45,
				"created_at": "2017-11-25T18:38:54Z",
				"updated_at": "2021-06-21T19:17:39Z"
			}));
	});

	it('returns the response status code if given a nonexisting user', () => {
		return getGitHubUser('averyveryfakeuser')
			.then(result => expect(result).toEqual(404));
	});
});