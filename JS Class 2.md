Function

Definition

function functionname(parameters){
code here
}

Invoking / calling => Execution
functionname(arguments)

1. Function Statement

2. Function Expression
   return statement

   Calculator eg => function sum(a,b) {
   return a+b
   }

   function product(c,d) {
   return c\*d
   }

product(x,5)

var x = sum(2,3)

var x = function (a,b) {
return a+b
}

Anonymous functions
A function without name/ nameless functions

Parameters and Arguments
Parameters => Variables listed as a part of function definition

Arguments => Values passed to the function when invoked

Callback Functions

function eatBreakfast(){
console.log(`I will eat dosa as my breakfast`)
}

eatBreakfast()

Callback => is an uninvoked function passed as an argument to another function
another function => invoked()/called => executing

arg => doBrush

eatBreakfast function => another function that is being executed

functionName() => calling/invoking

Order of execution

HOF => Higher Order Functions
Sweets

forEach

function => 3 parameters => Element, index, array

map

function => 3 parameters => Element, index, array

Filter
function => 3 parameters => Element, index, array
1st position => element
2nd position => index
3rd position => array


Reduce

1. Without initial value

var nums = [2, 3, 6, 7];

Iteration Count             acc                      current element             acc+currElement
1st                         nums[0] = 2               nums[1] = 3                2 + 3 = 5
2nd                         5                         nums[2] = 6                5 + 6 = 11
3rd                         11                        nums[3] = 7                11 + 7 = 18

2. With initial value 
=> acc = 0
Iteration Count                 acc                     current element                 acc+currElement
1st                             0                       nums[0] = 2                     0 + 2 = 2
2nd                             2                       nums[1] = 3                     2 + 3 = 5
3rd                             5                       nums[2] = 6                     5 + 6 = 11
4th                             11                      nums[3] = 7                     11 + 7 = 18



HOF             Input               Output
forEach         array               undefined        
map             array               array
filter          array               array
reduce          array               single value


Optional chaining =>
Chain => Links => Connected

map().filter().reduce()

var nums = [2, 3, 6, 7];

map().filter()

filter().map()

Last options after which chaining cannot continue => forEach(), reduce()


Sort()

Optional compare function

function(a,b) {
    if(a > b) return 1
    if(a<b) return -1
    return 0
}

Ascending order

a > b

a > b ==> a - b => +ve => > 0 => +1 => 1

a < b ==> a - b => -ve => < 0 => -1

a == b ==> a - b => 0
