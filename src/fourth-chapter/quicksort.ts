export function quicksort(arr: number[]): number[] {
	if (arr.length < 2) return arr

	const pivot = arr[0]
	const less = arr.slice(1).filter((num) => num <= pivot)
	const greater = arr.slice(1).filter((num) => num > pivot)

	const result = quicksort(less).concat(pivot, quicksort(greater))

	return result
}

export function showQuicksort(arr: number[]) {
	console.log(`The quicksort of [${arr}] is equal to [${quicksort(arr)}]`)
}
