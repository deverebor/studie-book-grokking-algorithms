import { countdown } from '../countdown-recursive'
import { greeting, sayGoodbye, sayHowAreYou } from '../greatings-recursive'
import { factorial, showFactorial } from '../factorial-recursive'
import { recursiveTail } from '../recursive-tail'

describe('Third chapter', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})
	it('should countdown form 5 to 0 work', () => {
		const item = 5
		const consoleLogSpy = jest.spyOn(console, 'log')

		countdown(item)

		expect(consoleLogSpy).toHaveBeenCalledTimes(6)
	})

	it('should countdown return null', () => {
		const item = 0

		expect(countdown(item)).toBe(null)
	})

	it('should sayHowAreYou function work correctly', () => {
		const name = 'Lucas'
		const consoleLogSpy = jest.spyOn(console, 'log')

		sayHowAreYou(name)

		expect(consoleLogSpy).toBeCalledWith(`How are you, ${name} ?`)
	})

	it('should sayGoodBye function work correctly', () => {
		const consoleLogSpy = jest.spyOn(console, 'log')

		sayGoodbye()

		expect(consoleLogSpy).toBeCalledWith('Goodbye!')
	})

	it('should greeting function work correctly', () => {
		const name = 'Lucas'
		const consoleLogSpy = jest.spyOn(console, 'log')

		greeting(name)

		expect(consoleLogSpy).toHaveBeenCalledTimes(4)
	})

	it('should greeting display console.log texts', () => {
		const name = 'Lucas'
		const consoleLogSpy = jest.spyOn(console, 'log')

		greeting(name)

		expect(consoleLogSpy).toHaveBeenCalledWith(`Hello, ${name}!`)
		expect(consoleLogSpy).toHaveBeenCalledWith(`How are you, ${name} ?`)
		expect(consoleLogSpy).toHaveBeenCalledWith('Greetin ready to say bye...')
		expect(consoleLogSpy).toHaveBeenCalledWith('Goodbye!')
	})

	it('should factorial function return the factorial of 5', () => {
		const item = 5
		const expectedResult = 120

		expect(factorial(item)).toBe(expectedResult)
	})

	it('should showFactorial function return the factorial of 5', () => {
		const item = 5
		const expectedResult = 120
		const consoleLogSpy = jest.spyOn(console, 'log')

		showFactorial(item)

		expect(consoleLogSpy).toHaveBeenCalledWith(
			`The factorial of ${item} is ${expectedResult}`,
		)
	})

	it('should recursiveTail return recursive 5', () => {
		const item = 5
		const expectedResult = 15

		expect(recursiveTail(item)).toBe(expectedResult)
	})

	it('should recursiveTail return recursiveTotal equals to 0', () => {
		const item = 0
		const expectedResult = 0

		expect(recursiveTail(item)).toBe(expectedResult)
	})

	it('should recursive total work with two parameters', () => {
		const item = 4
		const runningTotal = 5
		const expectedResult = 15

		expect(recursiveTail(item, runningTotal)).toBe(expectedResult)
	})
})
