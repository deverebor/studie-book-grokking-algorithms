interface IGraph {
	[key: string]: string[]
}

export const graph: IGraph = {}

function isSeller(name: string): boolean {
	return name.endsWith('m')
}

export function searchSeller(name: string): boolean {
	let searchQueue = graph[name]
	const searched: string[] = []

	while (searchQueue.length > 0) {
		const person = searchQueue.shift()

		if (typeof person === 'string') {
			if (!searched.includes(person) && isSeller(person)) {
				console.log(`${person} is a mango seller!`)
			} else {
				searchQueue = searchQueue.concat(graph[person])
				searched.push(person)
			}
		}
	}

	return false
}
