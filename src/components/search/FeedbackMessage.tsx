import React from 'react';
import './FeedbackMessage.css';

type FeedbackMessageProps = {
	message : string
};

const FeedbackMessage = ({ message } : FeedbackMessageProps) : JSX.Element => {
	return (
		<div
			aria-label="feedback message"
			className="feedbackMessage">
			{message}
		</div>
	);
};

export default FeedbackMessage;
