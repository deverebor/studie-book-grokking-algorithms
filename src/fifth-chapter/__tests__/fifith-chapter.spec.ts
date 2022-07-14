import { showBasket } from '../hash-basket'
import { showVoted } from '../hash-voted'

describe('Fifth chapter', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	it('should showBasket show the result', () => {
		const item = 'apples'
		const quantity = 5
		const showBasketSpy = jest.spyOn(console, 'log')

		showBasket(item, quantity)

		expect(showBasketSpy).toHaveBeenCalledWith('apples now has 5 in the basket')
	})

	it('should showBasket show the result whiteout quantity parameter', () => {
		const item = 'apples'
		const showBasketSpy = jest.spyOn(console, 'log')

		showBasket(item)

		expect(showBasketSpy).toHaveBeenCalledWith('apples now has 1 in the basket')
	})

	it('should showVoted show the result', () => {
		const name = 'Bob'
		const showVotedSpy = jest.spyOn(console, 'log')

		showVoted(name)

		expect(showVotedSpy).toHaveBeenCalledWith('Bob has voted')
	})

	it('should return has voted when the same person voted again', () => {
		const name = 'Bob'
		const showVotedSpy = jest.spyOn(console, 'log')

		showVoted(name)
		showVoted(name)

		expect(showVotedSpy).toHaveBeenCalledWith('Bob has already voted')
	})
})
