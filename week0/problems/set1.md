Implement the following problems using JavaScript (NodeJS).
Test-Drive them with `nodeunit`

If you struggle with basic syntax and semantics - go back to `README.md` and read the examples :)

## N-th Fibonacci

The most annoying problem of all.

Implement a function, called `nth_fibonacci(n)` that returns the n-th fibonacci number, given by the argument.

### Signature

```javascript
var nth_fibonacci = function(n) {
    // implementation here
}
```

### Test examples

```javascript
nth_fibonacci(1) === 1
nth_fibonacci(2) === 1
nth_fibonacci(3) === 2
nth_fibonacci(10) === 55
```

## Sum all digits of a number

Given an integer, implement a function, called `sum_of_digits(n)` that calculates the sum of the digits of n.

If a negative number is given, the function should work as if it was positive.

For example, if n is `1325132435356`, the digit's sum is `43`.
If n is -10, the sum is 1 + 0 = 1

For integer division in JavaScript, check this - http://stackoverflow.com/questions/4228356/integer-division-in-javascript

### Signature

```javascript
var sum_of_digits = function(n) {
    // implementation
}
```

### Test examples

```javascript
sum_of_digits(1325132435356) === 43
sum_of_digits(123) === 6
sum_of_digits(6) === 6
sum_of_digits(-10) === 1
```

## Sum the minimum and maximum elements

Given an array of integers, implement a function, called `sum_of_min_and_max(arr)`, that calculates and returns the sum of the largest and the smallest integers in the array.

Don't bother for the case when the array is empty.

### Signature

```javascript
var sum_of_min_and_max = function(arr) {
    // implementation
}
```

### Test examples
```javascript
sum_of_min_and_max([1,2,3,4,5,6,8,9]) === 10
sum_of_min_and_max([-10,5,10,100]) === 90
sum_of_min_and_max([1]) === 2
```

## Sum all divisors of an integer

Given an integer, implement a function, called `sum_of_divisors(n)` that calculates the sum of all divisors of n.

For example, the divisors of 8 are 1,2,4 and 8 and `1 + 2 + 4 + 8 = 15`
The divisors of 7 are 1 and 7, which makes the sum = 8

### Signature

```javascript
var sum_of_divisors = function(n) {
    // implementation
}
```

### Test examples

```javascript
sum_of_divisors(8) === 15
sum_of_divisors(7) === 8
sum_of_divisors(1) === 1
sum_of_divisors(1000) === 2340
```

## Check if integer is prime

Given an integer, implement a function, called `is_prime(n)` which returns True if n is a prime number. You should handle the case with negative numbers too.

A primer number is a number, that is divisible only by 1 and itself.

1 is not considered to be a prime number. [If you are curious why, find out here.](http://www.youtube.com/watch?v=IQofiPqhJ_s)

### Signature

```javascript
var is_prime = function(n) {
    // implementation
}
```

### Test examples

```javascript
is_prime(1) === false
is_prime(2) === true
is_prime(8) === false
is_prime(11) === true
is_prime(-10) === false
```

## Check if a number has a prime number of divisors

Given an integer, implement a function, called `prime_number_of_divisors(n)` which returns True if the number of divisors of n is a prime number. False otherwise.

For example, the divisors of 8 are 1,2,4 and 8, a total of 4. 4 is not a prime.
The divisors of 9 are 1,3 and 9, a total of 3, which is a prime number.

### Signature

```javascript
var prime_number_of_divisors = function(n) {
    // Implementation
}
```

### Test examples

```javascript
prime_number_of_divisors(7) === true
prime_number_of_divisors(8) === false
prime_number_of_divisors(9) === true
```

## Integer Palindromes

A palindrome is а word or a phrase or a number, that when reversed, stays the same.

For example, the following sequences are palindromes : `azobi4amma4iboza` or `anna`.

But this time, we are not interested in words but numbers.
A number palindrome is a number, that taken backwards, remains the same.

For example, the numbers 1, 4224, 9999, 1221 are number palindromes.

Implement a function, called `is_int_palindrome(n)` which takes an integer and returns True, if this integer is a palindrome.

### Signature

```javascript
var is_int_palindrome = function(n) {
    // implementation
}
```

### Test examples

```javascript
is_int_palindrome(1) === true
is_int_palindrome(42) === false
is_int_palindrome(100001) === true
is_int_palindrome(999) === true
is_int_palindrome(123) === false
```

## Is number balanced?

A number is called balanced, if we take the middle of it and the sums of the left and right parts are equal.

For example, the number `1238033` is balanced, bacause it has a left part, equal to 123, and right part, equal ot 033.

We have : `1 + 2 + 3 = 0 + 3 + 3 = 6`

A number with only one digit is always balanced.

Implement a function, called `is_number_balanced(n)` which checks if the given number is balanced.

### Signature

```javascript
var is_number_balanced = function(n) {
    // Implementation
}
```

### Test examples

```javascript
is_number_balanced(9) === true
is_number_balanced(11) === true
is_number_balanced(13) === false
is_number_balanced(121) === true
is_number_balanced(4518) === true
is_number_balanced(28471) === false
is_number_balanced(1238033) === true
```

## Counting substrings

Implement a function, called `count_substrings(haystack, needle)` which returns the count of occurrences of the string `needle` in the string `haystack`.

__Don't count overlapped substings and take case into consideration!__
For overlapping substrings, check the "baba" example below.

### Signature

```javascript
var count_substrings = function(haystack, needle) {
    // Implementation
}
```

### Test examples
```javascript
count_substrings("This is a test string", "is") === 2
count_substrings("babababa", "baba") === 2
count_substrings("JavaScript is an awesome language to program in!", "o") === 3
count_substrings("We have nothing in common!", "really?") === 0
count_substrings("This is this and that is this", "this")  === 2
```

## Vowels in a string

Implement a function, called `count_vowels(str)` which returns the count of all vowels in the given string `str`. __Count uppercase vowels as well!__

The vowels are `aeiouy`.

### Signature

```javascript
var count_vowels = function(str) {
    // Implementation
}
```

### Test examples

```javascript
count_vowels("JavaScript") === 3
count_vowels("Theistareykjarbunga") === 8
count_vowels("grrrrgh!") === 0
count_vowels("Github is the second best thing that happend to programmers, after the keyboard!") === 22
count_vowels("A nice day to code!") === 8
```

## Consonants in a string

Implement a function, called `count_consonants(str)` which returns the count of all consonants in the given string `str`. __Count uppercase consonants as well!__

The consonants are `bcdfghjklmnpqrstvwxz`.

### Signature

```javascript
var count_consonants = function(str){
    // Implementation
}
```

### Test examples

```javascript
count_consonants("JavaScript") === 7
count_consonants("Theistareykjarbunga") === 11
count_consonants("grrrrgh!") === 7
count_consonants("Github is the second best thing that happend to programmers, after the keyboard!") === 44
count_consonants("A nice day to code!") === 6
```

## Turn a number into a list of digits

Implement a function, called `number_to_list(n)` which takes an integer `n` and returns a list, containing the digits of `n`

### Signature

```javascript
var number_to_list = function(n){
    // Implementation
}
```

### Test Examples

```javascript
number_to_list(123) === [1, 2, 3]
number_to_list(99999) === [9, 9, 9, 9, 9]
number_to_list(123023) === [1, 2, 3, 0, 2, 3]
```

## Turn a list of digits into a number

Implement a function, called `list_to_number(digits)` which takes a list of digits (integers) and returns the number, containing those digits.

### Signature

```javascript
var list_to_number = function(digits){
    // Implementation
}
```

### Test Examples

```javascript
list_to_number([1,2,3]) === 123
list_to_number([9,9,9,9,9]) === 99999
list_to_number([1,2,3,0,2,3]) === 123023
```

## Increasing sequence?

Implement a function, called `is_increasing(seq)` where `seq` is a list of integers.

The function should return True, if the given sequence is monotonously increasing.

And before you skip this problem, because of the math terminology, let me explain:

> A sequence is monotonously increasing if for every two elements a and b, that are next to each other (a is before b), we have a < b

For example, `[1,2,3,4,5]` is monotonously increasing while `[1,2,3,4,5,1]` is not.

### Signature

```javascript
var is_increasing = function(seq) {
    // Implementation
}
```

### Test examples

```javascript
is_increasing([1,2,3,4,5]) === true
is_increasing([1]) === true
is_increasing([5,6,-10]) === false
is_increasing([1,1,1,1]) === false
```

## Descreasing sequence?

Implement a function, called `is_decreasing(seq)` where `seq` is a list of integers.

The function should return True, if the given sequence is monotonously decreasing.

And before you skip this problem, because of the math terminology, let me explain:

> A sequence is monotonously decreasing if for every two elements a and b, that are next to each other (a is before b), we have a > b

For example, `[5,4,3,2,1]` is monotonously decreasing while `[1,2,3,4,5,1]` is not.

### Signature

```javascript
var is_decreasing = function(seq) {
    // Implementation
}
```

### Test examples

```javascript
>>> is_decreasing([5,4,3,2,1]) === true
>>> is_decreasing([1,2,3]) === false
>>> is_decreasing([100, 50, 20]) === true
>>> is_decreasing([1,1,1,1]) === false
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

Implement a function, called `prime_factorization(n)` which takes an integer and returns a list of lists `[pi, ai]`, which is the result of the factorization.

The list should be sorted in increasing order of the prime numbers.

### Signature

```javascript
var prime_factorization = function(n) {
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
prime_factorization(10) === [ [2, 1], [5, 1] ] // This is 2^1 * 5^1
prime_factorization(14) === [ [2, 1], [7, 1] ]
prime_factorization(356) === [[2, 2], [89, 1] ]
prime_factorization(89) === [ [89, 1] ] // 89 is a prime number
prime_factorization(1000) === [ [2, 3], [5, 3] ]
```
