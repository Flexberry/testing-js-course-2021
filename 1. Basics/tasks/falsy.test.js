import TestForLies from './falsy.js';

test('Falsy-значения удаляются из непустого массива', () => {
	// Arrange
	const testArray = [45, '', 0, 'hello', 4.7, false];
	const newArray = [];

	// Act 
	const result = new TestForLies(testArray, newArray);

	// Assert
	expect(result.removeFalsyValues()).toBe(TestForLies.newArray);
});

test('Аргумент является массивом', () => {
	// Arrange
	const testArray = [45, '', 0, 'hello', 4.7, false];
	const newArray = [];

	// Act 
	const result = new TestForLies(testArray, newArray);

	// Assert
	expect(Array.isArray(result.newArray)).toBe(Array.isArray([]));
});