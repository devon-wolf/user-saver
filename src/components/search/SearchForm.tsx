import React, { FormEvent, useState } from 'react';

type SearchFormProps = {
	setUsers : Function
	setMessage : Function
};

const SearchForm = ({ setUsers, setMessage } : SearchFormProps) => {
	const [searchInput, setSearchInput] = useState('');


	const handleSearchSubmit = (e : FormEvent) => {
		e.preventDefault();
		setUsers((prev : string[]) => prev ? [...prev, searchInput] : [searchInput]);
		setMessage('SEARCH SUBMITTED');
		setSearchInput('');
	};

	return (
		<form onSubmit={handleSearchSubmit}>
			<input
				value={searchInput}
				onChange={e => setSearchInput(e.target.value)}
			/>
		</form>
	);
};

export default SearchForm;
