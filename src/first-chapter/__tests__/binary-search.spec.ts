import { binarySearch } from '../binary-search'

describe('Binary search tests', () => {
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
})
