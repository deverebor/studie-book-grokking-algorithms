export function recursiveTail(item: number, runningTotal = 0): number {
	if (item === 0) {
		return runningTotal
	} else {
		return recursiveTail(item - 1, runningTotal + item)
	}
}
