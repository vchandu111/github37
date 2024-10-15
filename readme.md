Local Storage

Mini database or local database

How data is being stored in local storage:

key-value pairs

html applications/websites
key-value pairs in the browser
no expiration date

When to use:

1. Insensitive information

2. temporary data before pushing it to server

Limitations:

1. Insecure data

2. Synchronuous operations

3. Limited storage capacity

images and videos => Urls => http addresses

Where to see local storage on browsers

Local Storage METHODS:

1. setItem() =>

Store something or upload something on local storage =>

key and value => 2 args

2. getItem() =>

Get some data from local storage =>

key => retrieve value

1 arg => key

3. removeItem() =>

Removes/delete an item from local storage using its key

1 arg => key

4. clear() =>

Clears all local storage

no arg

By default =>

Store strings, boolean and numbers

objects and arrays => how to use

Syntax =>

1. setItem(key,value) => Adding/Update/Modify

2. getItem(key) => display

For arrays and objects =>

[1,2,4] => '1,2,4'

[1,2,4] => '[1,2,4]' => LS

{ school: "Masai" } => '{ school: "Masai" }' => LS

'[1,2,4]' => [1,2,4]

'{ school: "Masai" }' => { school: "Masai" }

JSON =>
Javascript Object Notation

Based on JS Object Syntax

Markup data, markdown data

text file =>

JSON is most widely used across the Internet

Data is fetched from DB => JSON

Sending Data to DB => JSON

Based on JS Objects

AJAX => network request

Java => JSON

JSON => keys should be in the form of string

JSON.stringify() => converts anything to string
object => LS => Datatype => string

JSON.parse() => convert back to their original form
string => object

Add keys, functions, methods

push, pop, shift,...

strings

|| 

false || 2

2

null || 2

2

null || 0

0


Create ids along with tasks => name, priority , id:index