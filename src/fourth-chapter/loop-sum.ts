export function sumArrayWithNumbers(arr: number[]): number {
	let total = 0

	arr.forEach((item) => {
		total += item
	})

	return total
}

export function showSumItems(arr: number[]) {
	console.log(
		`The sum of numbers in [${arr}] is equal to ${sumArrayWithNumbers(arr)}`,
	)
}
