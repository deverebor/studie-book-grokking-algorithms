export function searchSmallest(arr: number[]): number {
	let smaller = arr[0]
	let smaller_index = 0

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < smaller) {
			smaller = arr[i]
			smaller_index = i
		}
	}

	return smaller_index
}
