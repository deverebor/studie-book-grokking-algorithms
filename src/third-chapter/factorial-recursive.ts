export function factorial(item: number): number {
	if (item === 1) return item

	const calculateFactorial = item * factorial(item - 1)

	return calculateFactorial
}

export function showFactorial(item: number) {
	console.log(`The factorial of ${item} is ${factorial(item)}`)
}
