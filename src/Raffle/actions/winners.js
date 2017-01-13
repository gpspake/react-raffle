export const addToWinners = (item) => {
	console.log('adding item:', item);
	return {
		type: 'add',
		item
	};
}