# Notes about third chapter

## Recursion

Whe you write and recursion function you need to define whe to stop, because reach an infinite loop is easily.
Because of this an recursive function has **base case** and **recursive case**.

Recursive Case - whe the function is called by self, it will call itself.
Base case - When the function is not called by self again.

## Call Stack

When you add some information in stack he will be at the top of the stack, so if you want to read some information, you will read the top of the stack.

Because of this we have push and pop functions.

**Push** - add an element in the stack
**Pop** - remove an element in the stack

**This data structure are called stack**. Stack is an simple data structure, but it is a very important.

## Tail call optimization

Tail-call optimization is where you are able to avoid allocating a new stack frame for a function because the calling function will simply return the value that it gets from the called function. The most common use is tail-recursion, where a recursive function written to take advantage of tail-call optimization can use constant stack space.
