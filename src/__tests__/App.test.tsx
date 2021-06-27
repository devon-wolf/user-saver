import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { User } from '../types';
import UserSaver from '../pages/UserSaver';

// mocking the users that would be coming from Firebase
jest.mock('../hooks/useUsers', () => () => {
	let users : User[] = [{
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
	
	const setUsers = (newUsers : User[]) => {
		users = newUsers;
	};
	
	return { users, setUsers };
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

	// TODO this test needs to actually do something, but I need to work on the execution
	it.skip('takes in a search term and correctly updates with results on submit', () => {
		const searchForm = screen.getByLabelText('search form');
		const searchInput = screen.getByRole('textbox');
    
		fireEvent.change(searchInput, {
			target: { value: 'devon-wolf' } 
		});

		fireEvent.submit(searchForm);
	});
});



