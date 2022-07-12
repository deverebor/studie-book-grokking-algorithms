interface HashTable {
	[key: string]: boolean
}

const voted: HashTable = {}

export function showVoted(name: string) {
	if (voted[name]) {
		console.log(`${name} has already voted`)
	} else {
		voted[name] = true
		console.log(`${name} has voted`)
	}
}
