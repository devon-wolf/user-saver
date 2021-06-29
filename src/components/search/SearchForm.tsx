import React, { FormEvent, useState } from 'react';
import { getGitHubUser } from '../../services/getGitHubUser';
import usersRef from '../../services/firebaseConfig';
import { shapeUserData } from '../../services/mungeUtils';
import './SearchForm.css';

type SearchFormProps = {
	setMessage: React.Dispatch<React.SetStateAction<string>> 
};

const SearchForm = ({ setMessage } : SearchFormProps) : JSX.Element => {
	const [searchInput, setSearchInput] = useState('');

	const handleSearchSubmit = async (e : FormEvent) => {
		e.preventDefault();
		
		const fetchedUser = await getGitHubUser(searchInput);

		if (typeof fetchedUser === 'number') {
			if (fetchedUser === 404)
				setMessage('That user was not found.');
			else setMessage(`Something went wrong. (Status: ${fetchedUser})`);
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
			className="searchForm"
			onSubmit={handleSearchSubmit}
		>
			<input
				aria-label="search input"
				value={searchInput}
				onChange={e => setSearchInput(e.target.value)}
			/>
		</form>
	);
};

export default SearchForm;
