import React from 'react';

type FeedbackMessageProps = {
	message : string
};

const FeedbackMessage = ({ message } : FeedbackMessageProps) : JSX.Element => {
	return (
		<div>
			{message}
		</div>
	);
};

export default FeedbackMessage;
