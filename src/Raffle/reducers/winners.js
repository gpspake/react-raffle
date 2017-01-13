export default(state = [], payload) => {
	switch (payload.type) {
		case 'add':
			return [...state, payload.contestant];
		default:
			return state;
	}
};