export const convertDate = (dateString : string) => {
	const month = dateString.slice(5, 7);
	const day = dateString.slice(8, 10);
	const year = dateString.slice(0, 4);

	return `${month}/${day}/${year}`;
};