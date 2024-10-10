Push method
array.push(arguments)

arguments = 1 or more separated by a comma
Add elements to the end of the array

Pop method

array.pop()
Removes element from the end of the array

Shift method
array.shift()

Removes element from the beginning/start of the array

for(i = 1; i<=3; i++){
array.pop()
}

Unshift Method
array.unshift(arguments)
Add elements to the beginning of the array

[2,3,4,5,6,7]

2 ==> 0
3 ==> 1

arr.unshift(10, 1);

[10,1,2,3,4,5,6,7]

2 ==> 2
3 ==> 3

Concat method
Joins 2 or more arrays and returns a new array
var newVariable = array.concat(array2)

Functions => return statement

indexOf

array.indexOf(argument)

random dummy value => garbage value

2 arrays which consists of fruits. Combine these arrays into one in such a way that the resultant array should contain all fruits without any duplicates

for loop,

for (fruits1) {
if (fruits2.indexOf(fruits1[i]) == -1) {
add fruits1 to resultant array
}
}

IndexOf Method

It returns the index where the element is present or the first occurrence. Else => -1

array.indexOf(argument)

'', "", `` => strings

use both strings and variables => ``

Length of the array => array.length

start Index of any array = 0

end Index of any array = array.length-1

Includes
returns a boolean
true, else false

Dictionary => a - z

dog
start from d

join()
represents array as string with or without a separator

slice(start,end)

includes start but not end
made a copy, did not modify existing array

splice()
fruits.splice(start Index, no.of elements to replace / 0,element1, element2,....);
endIndex= arr.length-1

no.of elements to replace / 0

0 => add elements
1,2 => no of elements to replace
