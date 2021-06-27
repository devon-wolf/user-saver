import { useState } from 'react';

const useMessage = () : {
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
} => {
	const [message, setMessage] = useState('');

	return {
		message,
		setMessage
	};
};

export default useMessage;
