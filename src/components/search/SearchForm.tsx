import React, { FormEvent, useState } from 'react';

type SearchFormProps = {
	setUsers : Function
};

const SearchForm = ({ setUsers } : SearchFormProps) => {
	const [searchInput, setSearchInput] = useState('');


	const handleSearchSubmit = (e : FormEvent) => {
		e.preventDefault();
		setUsers((prev : string[]) => prev ? [...prev, searchInput] : [searchInput]);
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
