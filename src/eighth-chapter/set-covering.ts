let statesNeeded: Set<string> = new Set([
	'mt',
	'wa',
	'or',
	'id',
	'nv',
	'ut',
	'ca',
	'az',
])

type StationsType = { [key: string]: Set<string> }

const stations = {} as StationsType
stations.kone = new Set(['id', 'nv', 'ut'])
stations.ktwo = new Set(['wa', 'id', 'mt'])
stations.kthree = new Set(['or', 'nv', 'ca'])
stations.kfour = new Set(['nv', 'ut'])
stations.kfive = new Set(['ca', 'az'])

const finalStations = new Set()

while (statesNeeded.size) {
	let bestStation = null
	let statesCovered: Set<string> = new Set()

	Object.keys(stations).forEach((station: string) => {
		const states: Set<string> = stations[station]
		const covered = new Set(
			[...statesNeeded].filter((x: string): boolean => states.has(x)),
		)
		if (covered.size > statesCovered.size) {
			bestStation = station
			statesCovered = covered
		}
	})

	statesNeeded = new Set([...statesNeeded].filter((x) => !statesCovered.has(x)))
	finalStations.add(bestStation)
}

console.log(finalStations)
