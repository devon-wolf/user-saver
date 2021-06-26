import { convertDate } from './convertDate';

it('takes a date string as formatted by the GitHub API and reformats it to MM/DD/YYYY', () => {
	const exampleDate = '2017-11-25T18:38:54Z';

	expect(convertDate(exampleDate)).toEqual('11/25/2017');
});