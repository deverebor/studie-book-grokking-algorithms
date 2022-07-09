import { countdown } from './countdown-recursive'
import { greeting } from './greeting-recursive'
import { showFactorial } from './factorial-recursive'
import { recursiveTail } from './recursive-tail'

/*
  Recursion:
  
  Is a technique for implementing a function or method that calls itself.
  It is a common programming technique in computer science, and is often used in recursive programming.S
*/

countdown(5) // 5 4 3 2 1
greeting('Lucas')
showFactorial(5) // The factorial of 5 is 120

// Recursive Tail
console.log(recursiveTail(5, 0)) // 15
