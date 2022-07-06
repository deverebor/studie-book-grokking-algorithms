import { binarySearch } from './binary-search'

const shortArr = [1, 2, 3, 4, 5]
const tenItemsArr = [3, 9, 10, 11, 12, 13, 14, 17, 18, 19]

console.log(binarySearch(shortArr, 3))
console.log(binarySearch(shortArr, -1))

console.log(binarySearch(tenItemsArr, 13))
console.log(binarySearch(tenItemsArr, -1))
