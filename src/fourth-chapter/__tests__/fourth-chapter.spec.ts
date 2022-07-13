import { sumArrayWithNumbers, showSumItems } from '../loop-sum'
import { recursiveSum, showRecursiveSummedArray } from '../recursive-sum'
import { recursiveCount, showRecursiveCount } from '../recursive-count'
import { recursiveMax, showRecursiveMax } from '../recursive-max'
import { quicksort, showQuicksort } from '../quicksort'

const arr = [1, 2, 3, 4, 5]

describe('Fourth chapter', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	it('should loop sum work correctly', () => {
		const total = sumArrayWithNumbers(arr)

		expect(total).toBe(15)
	})

	it('should showSumItems console.log information', () => {
		const showSumItemsSpy = jest.spyOn(console, 'log')
		const total = sumArrayWithNumbers(arr)

		showSumItems(arr)

		expect(showSumItemsSpy).toHaveBeenCalledWith(
			`The sum of numbers in [${arr}] is equal to ${total}`,
		)
	})

	it('should recursiveSum work correctly', async () => {
		const total = recursiveSum(arr)

		expect(total).toBe(15)
	})

	it('should recursiveSum with array length 1 return array index', () => {
		const arr = [1]
		const total = recursiveSum(arr)

		expect(total).toBe(1)
	})

	it('should showRecursiveSummedArray console.log information', () => {
		const showRecursiveSummedArraySpy = jest.spyOn(console, 'log')
		const total = recursiveSum(arr)

		showRecursiveSummedArray(arr)

		expect(showRecursiveSummedArraySpy).toHaveBeenCalledWith(
			`The recursive sum of numbers in [${arr}] is equal to ${total}`,
		)
	})

	it('should recursiveCount work correctly', async () => {
		const total = recursiveCount(arr)

		expect(total).toBe(5)
	})

	it('should recursiveCount with array length 1 return array index', () => {
		const arr = [1]
		const total = recursiveCount(arr)

		expect(total).toBe(1)
	})

	it('should showRecursiveCount console.log information', () => {
		const showRecursiveCountArraySpy = jest.spyOn(console, 'log')
		const total = recursiveCount(arr)

		showRecursiveCount(arr)

		expect(showRecursiveCountArraySpy).toHaveBeenCalledWith(
			`The recursive count of numbers in [${arr}] is equal to ${total}`,
		)
	})

	it('should recursiveMax return false if any list was passed', () => {
		const emptyArr: number[] = []
		const total = recursiveMax(emptyArr)

		expect(total).toBe(false)
	})

	it('should recursiveMax with array length 1 return array index', () => {
		const arr = [1]
		const total = recursiveMax(arr)

		expect(total).toBe(1)
	})

	it('should recursiveMax return the index value from array when pos 0 and 1 has the same value', () => {
		const arr = [5, 5, 3, 4, 2]
		const total = recursiveMax(arr)

		expect(total).toBe(5)
	})

	it('should recursiveMax work correctly', async () => {
		const total = recursiveMax(arr)

		expect(total).toBe(5)
	})

	it('should showRecursiveMax console.log information', () => {
		const showRecursiveMaxSpy = jest.spyOn(console, 'log')
		const total = recursiveMax(arr)

		showRecursiveMax(arr)

		expect(showRecursiveMaxSpy).toHaveBeenCalledWith(
			`The recursive sum of numbers in [${arr}] is equal to ${total}`,
		)
	})

	it('should quicksort work correctly', async () => {
		const shuffledList = [4, 5, 7, 1, 2, 3]
		const unsortedList = [1, 2, 3, 4, 5, 7]
		const total = quicksort(shuffledList)

		expect(total).toEqual(unsortedList)
	})

	it('should showQuicksort console.log information', () => {
		const showQuicksortSpy = jest.spyOn(console, 'log')
		const total = quicksort(arr)

		showQuicksort(arr)

		expect(showQuicksortSpy).toHaveBeenCalledWith(
			`The quicksort of [${arr}] is equal to [${total}]`,
		)
	})
})
