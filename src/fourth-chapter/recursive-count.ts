export function recursiveCount(arr: number[]): number {
	if (arr.length === 1) return 1

	const countedArr = 1 + recursiveCount(arr.slice(1))

	return countedArr
}

export function showRecursiveCount(arr: number[]) {
	console.log(
		`The recursive count of numbers in [${arr}] is equal to ${recursiveCount(
			arr,
		)}`,
	)
}
