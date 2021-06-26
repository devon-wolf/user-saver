import React, { FormEvent, useState } from 'react';
import { getGitHubUser } from '../../services/getGitHubUser';
import { usersRef } from '../../services/firebaseUtils';
import { shapeUserData } from '../../services/mungeUtils';

type SearchFormProps = {
	setMessage : Function
};

const SearchForm = ({ setMessage } : SearchFormProps) => {
	const [searchInput, setSearchInput] = useState('');

	const handleSearchSubmit = async (e : FormEvent) => {
		e.preventDefault();
		const fetchedUser = await getGitHubUser(searchInput);

		if (fetchedUser === 404) {
			setMessage('That user was not found.');
		}
		else {
			setMessage('Success!');
			const shapedUser = shapeUserData(fetchedUser);
			usersRef.push(shapedUser);
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
