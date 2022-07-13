export function recursiveMax(arr: number[]): number | boolean {
	if (arr.length === 0) return false
	if (arr.length === 1) return arr[0]

	const maxSubtraction = recursiveMax(arr.slice(1))
	const max = arr[0] > maxSubtraction ? arr[0] : maxSubtraction

	return max
}

export function showRecursiveMax(arr: number[]) {
	console.log(
		`The recursive sum of numbers in [${arr}] is equal to ${recursiveMax(arr)}`,
	)
}
