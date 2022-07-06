import { searchSmallest } from './search-smallest'

export function ordernationPerSearch(arr: number[]): number[] {
	const searchedArr = []
	const arrLength = arr.length

	for (let i = 0; i < arrLength; i++) {
		const index = searchSmallest(arr)
		searchedArr.push(arr[index])
		arr.splice(index, 1)
	}

	return searchedArr
}
