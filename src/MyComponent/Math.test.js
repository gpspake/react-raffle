import Math from './Math'

it('adds two numbers', () => {
	let math = new Math();
	expect( math.add(1,2) ).toBe(3);
});