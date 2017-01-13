export const addToWinners = (contestant) => {
	return {
		type: 'add',
		contestant
	};
}