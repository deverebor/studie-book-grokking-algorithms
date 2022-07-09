export function countdown(item: number) {
	console.log(item)
	if (item <= 0) return null

	countdown(item - 1)

	return null
}
