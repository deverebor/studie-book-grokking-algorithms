export function sayHowAreYou(name: string) {
	console.log(`How are you, ${name} ?`)
}

export function sayGoodbye() {
	console.log('Goodbye!')
}

export function greeting(name: string) {
	console.log(`Hello, ${name}!`)
	sayHowAreYou(name)
	console.log('Greetin ready to say bye...')
	sayGoodbye()
}
