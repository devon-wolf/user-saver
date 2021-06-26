import React, { FormEvent, useState } from 'react';
import { getGitHubUser } from '../../services/githubFetch';

type SearchFormProps = {
	setUsers : Function
	setMessage : Function
};

const SearchForm = ({ setUsers, setMessage } : SearchFormProps) => {
	const [searchInput, setSearchInput] = useState('');

	const handleSearchSubmit = async (e : FormEvent) => {
		e.preventDefault();
		console.log('*****FORM SUBMITTED*****')
		const fetchedUser = await getGitHubUser(searchInput);

		if (fetchedUser === 404) {
			setMessage('That user was not found.');
		}
		else {
			setMessage('Success!');
			setUsers((prev : string[]) => [...prev, fetchedUser]);
		}

		setSearchInput('');
	};

	return (
		<form
			aria-label="search form"
			onSubmit={handleSearchSubmit}
		>
			<input
				value={searchInput}
				onChange={e => setSearchInput(e.target.value)}
			/>
		</form>
	);
};

export default SearchForm;
