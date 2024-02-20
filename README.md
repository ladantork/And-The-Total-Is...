# And-The-Total-Is...

Instructions
The sumNums function takes a string as an argument. It should return the sum of all the numbers contained within the string. If there are no numbers in the string, sumNums should return 0.

Consecutive digits should be taken as a single number, e.g. "abc24def" would be 24, not 6.

Although there are multiple ways of achieving this, make sure to use a regular expression.

Example
sumNums('') // returns 0
sumNums('abcdef') // returns 0
sumNums('1') // returns 1
sumNums('123') // returns 123
sumNums('1hello2') // returns 3
sumNums('12hiya!3') // returns 15
