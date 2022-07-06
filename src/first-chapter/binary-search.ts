/*
  Binary search
  Only works on sorted arrays. for example [1,2,3,4,5]
*/

export function binarySearch(arr: number[], index: number): number | null {
	let low = 0
	let high = arr.length - 1

	while (low <= high) {
		const middle = Math.floor((low + high) / 2)
		const guess = arr[middle]

		if (guess == index) {
			return middle
		}

		if (guess > index) {
			high = middle - 1
		} else {
			low = middle + 1
		}
	}

	return null
}

const shortArr = [1, 2, 3, 4, 5]
const tenItemsArr = [3, 9, 10, 11, 12, 13, 14, 17, 18, 19]

console.log(binarySearch(shortArr, 3))
console.log(binarySearch(shortArr, -1))

console.log(binarySearch(tenItemsArr, 13))
console.log(binarySearch(tenItemsArr, -1))
