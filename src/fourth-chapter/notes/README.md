# Notes about fourth chapter

## Divider to conquer

- Find the base case, which should be the simplest possible case
- Split or scale down your problem until it becomes the base case

You should break the problem into smaller parts to find the smallest divisible size possible so you know how to split the whole completely.

> Euclides Algorithm
> is a simple and efficient method of finding the greatest common divisor between two non-zero integers.

## Quicksort

Is an ordination algorithm. Much more fast than ordination per selection.
The DC strategy works by dividing the problem into fewer problems. If you are using DC on a list, the base case is likely to be an empty array or an array with only one element.

If you are implementing quicksort, choose a random element like pivot. The average execution time of quicksort is O(*n* log *n*)
The constant, in Big O notation, may be relevant in some cases. This is the reason why quicksort is faster than merge sort.

The constant will hardly be relevant in the comparison between simple search and binary search, as O(log *n*) is much faster than O(*n*) when your list is large.

### Partition

Create an array of elements that are less than the pivot and store them in the left side of the array.
Contain bigger elements in the right side of the array.

The sub array are sorted, and this way the new array will be sorted.
