interface HashTable {
	[key: string]: number
}

const basket: HashTable = {}

export function showBasket(item: string, quantity = 1) {
	basket[item] += quantity
	console.log(`${item} now has ${quantity} in the basket`)
}
