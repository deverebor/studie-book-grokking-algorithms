# Notes about fifth chapter

## Hash functions

Is an function which you insert an string and after that, the function return an number. The hash function mapping strings and numbers.

An hash function has the following properties:

- Has consistency. Imagine that you insert an "apple" string and receive the 4 number. Every time you insert an "apple" string, you will receive the same number, otherwise you hash table does not work properly.
- The function has to map different words to different numbers. This way, an has function is useless if he's always return "1" independent of the string. All word should be mapped to different numbers.
