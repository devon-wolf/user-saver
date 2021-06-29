import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { User } from '../types';
import UserSaver from '../pages/UserSaver';

// mocking the users that would be coming from Firebase
const userValues : User[] = [{
	'id': 33987744,
	'url': 'https://github.com/devon-wolf',
	'login': 'devon-wolf',
	'name': 'n/a',
	'public_repos': 80,
	'public_gists': 0,
	'followers': 30,
	'following': 45,
	'created_at': '11/25/2017'
},
{
	'id': 74938966,
	'url': 'https://github.com/caseywar',
	'login': 'caseywar',
	'name': 'Casey Warren',
	'public_repos': 58,
	'public_gists': 0,
	'followers': 23,
	'following': 35,
	'created_at': '11/24/2020'
}];

jest.mock('../hooks/useFirebase', () => () => {
	return {
		values: userValues,
		loading: false
	};
});

jest.mock('../services/firebaseConfig', () => {
	return {
		push: (newUser : User) => userValues.push(newUser)
	};
});


describe('UserSaver page', () => {
	beforeEach(() => {
		render(<UserSaver />);
	});

	it('renders the user saver page', () => {
		screen.getByLabelText('search form');
		screen.getByRole('textbox');
		screen.getByRole('table');
	});

	it('displays a list of users and their data', () => {
		return screen.findAllByLabelText('user row')
			.then(tableRows => {
				expect(tableRows.length).toBeGreaterThan(0);
				tableRows.forEach(row => {
					expect(row).toMatchSnapshot();
				});
			});
	});

	// TODO mock needs to be improved to get the new user to render on the screen, currently just gets pushed into the array of users but doesn't trigger an update
	it('takes in a search term and correctly updates with results on submit', () => {
		const searchInput = screen.getByRole('textbox');

		const feedbackMessage = screen.getByLabelText('feedback message');
		expect(feedbackMessage).toHaveTextContent('');

		userEvent.type(searchInput, 'dpcairns');
		expect(searchInput).toHaveValue('dpcairns');

		expect(userValues.length).toEqual(2);

		userEvent.type(searchInput, '{enter}');
		
		return waitFor(() => {
			expect(searchInput).toHaveValue('');
			expect(feedbackMessage).toHaveTextContent('Success!');

			// TODO remove when screen is working
			expect(userValues.length).toEqual(3);
		});
	});
});



