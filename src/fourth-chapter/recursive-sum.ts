export function recursiveSum(arr: number[]): number {
	if (arr.length === 1) return arr[0]

	const summedArr = arr[0] + recursiveSum(arr.slice(1))

	return summedArr
}

export function showRecursiveSummedArray(arr: number[]) {
	console.log(
		`The recursive sum of numbers in [${arr}] is equal to ${recursiveSum(arr)}`,
	)
}
