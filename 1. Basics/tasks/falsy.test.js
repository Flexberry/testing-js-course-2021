import TestForLies from './falsy.js';

test('Falsy-значения удаляются из непустого массива', () => {
	// Arrange
	const testArray = [45, '', 0, 'hello', 4.7, false];
	const newArray = [];

	// Act 
	let result = new TestForLies(testArray, newArray);

	// Assert
	expect(result.removeFalsyValues()).toBe(TestForLies.newArray);
});