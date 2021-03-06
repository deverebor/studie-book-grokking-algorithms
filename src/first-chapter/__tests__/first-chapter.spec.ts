import { binarySearch } from '../binary-search'

describe('First Chapter', () => {
	it('should return null if the value is not found', () => {
		const arr = [1, 2, 3, 4, 5]
		const index = -1

		expect(binarySearch(arr, index)).toBeNull()
	})

	it('should return the index of the value if it is found', () => {
		const arr = [1, 2, 3, 4, 5]
		const searchedItem = 3
		const indexInArr = 2

		expect(binarySearch(arr, searchedItem)).toBe(indexInArr)
	})

	it('should search for the value in low position in array', () => {
		const arr = [1, 2, 3, 4, 5]
		const searchedItem = 4
		const indexInArr = 3

		expect(binarySearch(arr, searchedItem)).toBe(indexInArr)
	})
})
