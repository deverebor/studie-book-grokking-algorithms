# Notes about first chapter

## Binary search x Linear search

In a linear search the time is exponential, that is, if you have a list with 100 elements, the search time is O(n). So it would take 100 tries to find the desired number.

In a binary search, the search time is O(log n), so if you have a list with 100 elements, the search time is O(log 100), so the search time is 7 and not 100 anymore.

## Big O notation

The difference between simple and binary research is striking when it comes to large numbers. In the case of a search for a list of 1 billion items it would take 11 days to do it by simple notation and 32ms by binary search.

the Big O tells you how fast an algorithm is. Binary lookup needs log *n* operations to check a list of size *n*. in Big O notation it would be O(log *n*), whereas the linear search is O(*n*) since they are just linear actions. She tries to take into account the worst case and the middle case to come up with a metric.

To do a search using binary search takes eisecond, so take into account 16 items from a list, if you use binary search it will do O(log *n*) i.e. (log 16 is 4) then it will take *0.4 sec* to complete the search.

### Runtime Examples with Big O

These are the five most common:

- O(log *n*), also known as logarithmic time. EX binary search
- O(*n*), also known as linear time. EX simple search
- O(*n* \* log *n*), also known as linear log. EX quicksort sorting
- O($n^2$), also known as quadratic. EX sort by selection
- O(*n*!), also known as exponential. EX insertion sort
