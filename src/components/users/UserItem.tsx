import React from 'react';

type UserProps = {
	user : string
};

const UserItem = ({ user } : UserProps) => {
	return (
		<>
			{user}
		</>
	);
};

export default UserItem;
