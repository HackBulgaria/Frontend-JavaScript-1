Implement the following problems using JavaScript (NodeJS).
Test-Drive them with `nodeunit`

If you struggle with basic syntax and semantics - go back to `README.md` and read the examples :)

## N-th Fibonacci

The most annoying problem of all.

Implement a function, called `fib(n)` that returns the n-th fibonacci number, given by the argument.

### Signature

```javascript
var fib = function(n) {
    // implementation here
}
```

### Test examples

```javascript
fib(1) === 1
fib(2) === 1
fib(3) === 2
fib(10) === 55
```

## Sum all digits of a number

Given an integer, implement a function, called `sumOfDigits(n)` that calculates the sum of the digits of n.

If a negative number is given, the function should work as if it was positive.

For example, if n is `1325132435356`, the digit's sum is `43`.
If n is -10, the sum is 1 + 0 = 1

For integer division in JavaScript, check this - http://stackoverflow.com/questions/4228356/integer-division-in-javascript

### Signature

```javascript
var sumOfDigits = function(n) {
    // implementation
}
```

### Test examples

```javascript
sumOfDigits(1325132435356) === 43
sumOfDigits(123) === 6
sumOfDigits(6) === 6
sumOfDigits(-10) === 1
```

## Sum the minimum and maximum elements

Given an array of integers, implement a function, called `sumOfMinAndMax(arr)`, that calculates and returns the sum of the largest and the smallest integers in the array.

Don't bother for the case when the array is empty.

### Signature

```javascript
var sumOfMinAndMax = function(arr) {
    // implementation
}
```

### Test examples
```javascript
sumOfMinAndMax([1,2,3,4,5,6,8,9]) === 10
sumOfMinAndMax([-10,5,10,100]) === 90
sumOfMinAndMax([1]) === 2
```

## Sum all divisors of an integer

Given an integer, implement a function, called `sumOfDivisors(n)` that calculates the sum of all divisors of n.

For example, the divisors of 8 are 1,2,4 and 8 and `1 + 2 + 4 + 8 = 15`
The divisors of 7 are 1 and 7, which makes the sum = 8

### Signature

```javascript
var sumOfDivisors = function(n) {
    // implementation
}
```

### Test examples

```javascript
sumOfDivisors(8) === 15
sumOfDivisors(7) === 8
sumOfDivisors(1) === 1
sumOfDivisors(1000) === 2340
```

## Check if integer is prime

Given an integer, implement a function, called `isPrime(n)` which returns True if n is a prime number. You should handle the case with negative numbers too.

A primer number is a number, that is divisible only by 1 and itself.

1 is not considered to be a prime number. [If you are curious why, find out here.](http://www.youtube.com/watch?v=IQofiPqhJ_s)

### Signature

```javascript
var isPrime = function(n) {
    // implementation
}
```

### Test examples

```javascript
isPrime(1) === false
isPrime(2) === true
isPrime(8) === false
isPrime(11) === true
isPrime(-10) === false
```

## Check if a number has a prime number of divisors

Given an integer, implement a function, called `primeNumberOfDivisors(n)` which returns True if the number of divisors of n is a prime number. False otherwise.

For example, the divisors of 8 are 1,2,4 and 8, a total of 4. 4 is not a prime.
The divisors of 9 are 1,3 and 9, a total of 3, which is a prime number.

### Signature

```javascript
var primeNumberOfDivisors = function(n) {
    // Implementation
}
```

### Test examples

```javascript
primeNumberOfDivisors(7) === true
primeNumberOfDivisors(8) === false
primeNumberOfDivisors(9) === true
```

## Integer Palindromes

A palindrome is а word or a phrase or a number, that when reversed, stays the same.

For example, the following sequences are palindromes : `azobi4amma4iboza` or `anna`.

But this time, we are not interested in words but numbers.
A number palindrome is a number, that taken backwards, remains the same.

For example, the numbers 1, 4224, 9999, 1221 are number palindromes.

Implement a function, called `isIntPalindrom(n)` which takes an integer and returns True, if this integer is a palindrome.

### Signature

```javascript
var isIntPalindrom = function(n) {
    // implementation
}
```

### Test examples

```javascript
isIntPalindrom(1) === true
isIntPalindrom(42) === false
isIntPalindrom(100001) === true
isIntPalindrom(999) === true
isIntPalindrom(123) === false
```

## Is number balanced?

A number is called balanced, if we take the middle of it and the sums of the left and right parts are equal.

For example, the number `1238033` is balanced, bacause it has a left part, equal to 123, and right part, equal ot 033.

We have : `1 + 2 + 3 = 0 + 3 + 3 = 6`

A number with only one digit is always balanced.

Implement a function, called `isNumberBalanced(n)` which checks if the given number is balanced.

### Signature

```javascript
var isNumberBalanced = function(n) {
    // Implementation
}
```

### Test examples

```javascript
isNumberBalanced(9) === true
isNumberBalanced(11) === true
isNumberBalanced(13) === false
isNumberBalanced(121) === true
isNumberBalanced(4518) === true
isNumberBalanced(28471) === false
isNumberBalanced(1238033) === true
```

## Counting substrings

Implement a function, called `countSubstrings(haystack, needle)` which returns the count of occurrences of the string `needle` in the string `haystack`.

__Don't count overlapped substings and take case into consideration!__
For overlapping substrings, check the "baba" example below.

### Signature

```javascript
var countSubstrings = function(haystack, needle) {
    // Implementation
}
```

### Test examples
```javascript
countSubstrings("This is a test string", "is") === 2
countSubstrings("babababa", "baba") === 2
countSubstrings("JavaScript is an awesome language to program in!", "o") === 3
countSubstrings("We have nothing in common!", "really?") === 0
countSubstrings("This is this and that is this", "this")  === 2
```

## Vowels in a string

Implement a function, called `countVowels(str)` which returns the count of all vowels in the given string `str`. __Count uppercase vowels as well!__

The vowels are `aeiouy`.

### Signature

```javascript
var countVowels = function(str) {
    // Implementation
}
```

### Test examples

```javascript
countVowels("JavaScript") === 3
countVowels("Theistareykjarbunga") === 8
countVowels("grrrrgh!") === 0
countVowels("Github is the second best thing that happend to programmers, after the keyboard!") === 22
countVowels("A nice day to code!") === 8
```

## Consonants in a string

Implement a function, called `countConsonants(str)` which returns the count of all consonants in the given string `str`. __Count uppercase consonants as well!__

The consonants are `bcdfghjklmnpqrstvwxz`.

### Signature

```javascript
var countConsonants = function(str){
    // Implementation
}
```

### Test examples

```javascript
countConsonants("JavaScript") === 7
countConsonants("Theistareykjarbunga") === 11
countConsonants("grrrrgh!") === 7
countConsonants("Github is the second best thing that happend to programmers, after the keyboard!") === 44
countConsonants("A nice day to code!") === 6
```

## Turn a number into a list of digits

Implement a function, called `numberToList(n)` which takes an integer `n` and returns a list, containing the digits of `n`

### Signature

```javascript
var numberToList = function(n){
    // Implementation
}
```

### Test Examples

```javascript
numberToList(123) === [1, 2, 3]
numberToList(99999) === [9, 9, 9, 9, 9]
numberToList(123023) === [1, 2, 3, 0, 2, 3]
```

## Turn a list of digits into a number

Implement a function, called `listToNumber(digits)` which takes a list of digits (integers) and returns the number, containing those digits.

### Signature

```javascript
var listToNumber = function(digits){
    // Implementation
}
```

### Test Examples

```javascript
listToNumber([1,2,3]) === 123
listToNumber([9,9,9,9,9]) === 99999
listToNumber([1,2,3,0,2,3]) === 123023
```

## Increasing sequence?

Implement a function, called `isIncreasing(seq)` where `seq` is a list of integers.

The function should return True, if the given sequence is monotonously increasing.

And before you skip this problem, because of the math terminology, let me explain:

> A sequence is monotonously increasing if for every two elements a and b, that are next to each other (a is before b), we have a < b

For example, `[1,2,3,4,5]` is monotonously increasing while `[1,2,3,4,5,1]` is not.

### Signature

```javascript
var isIncreasing = function(seq) {
    // Implementation
}
```

### Test examples

```javascript
isIncreasing([1,2,3,4,5]) === true
isIncreasing([1]) === true
isIncreasing([5,6,-10]) === false
isIncreasing([1,1,1,1]) === false
```

## Descreasing sequence?

Implement a function, called `isDecreasing(seq)` where `seq` is a list of integers.

The function should return True, if the given sequence is monotonously decreasing.

And before you skip this problem, because of the math terminology, let me explain:

> A sequence is monotonously decreasing if for every two elements a and b, that are next to each other (a is before b), we have a > b

For example, `[5,4,3,2,1]` is monotonously decreasing while `[1,2,3,4,5,1]` is not.

### Signature

```javascript
var isDecreasing = function(seq) {
    // Implementation
}
```

### Test examples

```javascript
>>> isDecreasing([5,4,3,2,1]) === true
>>> isDecreasing([1,2,3]) === false
>>> isDecreasing([100, 50, 20]) === true
>>> isDecreasing([1,1,1,1]) === false
```


## Problem 21 - Integer prime factorization

Given an integer `n`, we can factor it in the following form:

> n = p1^a1 * p2^a2 * ... * pn^an

Where each p is a prime number and each a is an integer and p^a means p to the power of a.

[This is called prime factorization.](http://mathworld.wolfram.com/PrimeFactorization.html)

Lets see few examples

> 10 = 2^1 * 5^1
> 25 = 5^2
> 356 = 2^2 * 89 ^ 1

Implement a function, called `primeFactorization(n)` which takes an integer and returns a list of lists `[pi, ai]`, which is the result of the factorization.

The list should be sorted in increasing order of the prime numbers.

### Signature

```javascript
var primeFactorization = function(n) {
    // Implementation
}
```

To add an element to a list, you can use the `push` method:

```javascript
var a = [];
a.push([2,1]);

console.log(a); // [ [1,2] ]
```

### Test examples

```javascript
primeFactorization(10) === [ [2, 1], [5, 1] ] // This is 2^1 * 5^1
primeFactorization(14) === [ [2, 1], [7, 1] ]
primeFactorization(356) === [[2, 2], [89, 1] ]
primeFactorization(89) === [ [89, 1] ] // 89 is a prime number
primeFactorization(1000) === [ [2, 3], [5, 3] ]
```
