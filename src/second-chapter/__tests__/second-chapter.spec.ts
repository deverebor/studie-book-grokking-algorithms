import { ordinationPerSearch } from '../ordination-per-search'
import { searchSmallest } from '../search-smallest'

describe('Second Chapter', () => {
	it('should searchSmaller return the size of an index', () => {
		const arr = [3, 2, 1, 1, 0]
		const index = searchSmallest(arr)
		expect(index).toBe(4)
	})

	it('should ordinationPerSearch return the order array', () => {
		const arr = [5, 3, 6, 2, 10]
		const orderedArr = ordinationPerSearch(arr)
		expect(orderedArr).toEqual([2, 3, 5, 6, 10])
	})
})
