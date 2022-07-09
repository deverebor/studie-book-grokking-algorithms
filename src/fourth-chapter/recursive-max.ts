/**
 * @todo: change the logic to return only numbers
 */

export function recursiveMax(arr: number[]): number | boolean {
	if (arr.length === 0) return false
	if (arr.length === 1) return arr[0]

	const maxSubtration = recursiveMax(arr.slice(1))
	const max = arr[0] > maxSubtration ? arr[0] : maxSubtration

	return max
}

export function showRecursiveMax(arr: number[]) {
	console.log(
		`The recursive sum of numbers in [${arr}] is equal to ${recursiveMax(arr)}`,
	)
}
