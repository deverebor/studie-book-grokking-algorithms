/*
  Ordering by searching(Arrays):

  search in an array of numbers, the smallest number an use it to order the array.
  to organize the array.

  unsorted array: [3, 9, 10, 11, 12, 13, 14, 17, 18, 19]
  sorted array: [3, 9, 10, 11, 12, 13, 14, 17, 18, 19]
*/

import { searchSmallest } from './search-smallest'

export function ordinationPerSearch(arr: number[]): number[] {
	const searchedArr = []
	const arrLength = arr.length

	for (let i = 0; i < arrLength; i++) {
		const index = searchSmallest(arr)
		searchedArr.push(arr[index])
		arr.splice(index, 1)
	}

	return searchedArr
}
