JAVASCRIPT inside HTML

functions, consoles, HOF, loops, switch-case

DOM => Document Object Model

Document HTML Document
window object => everything wrt window, document object => file you are viewing => HTML document

DOM => virtual respresentation => HTML document => in the form of object

Object => key-value pairs

HTML doc

   <title>Intro to DOM</title>

JS => DOM

title: Intro to DOM

accessing the key => title

modify the title

Object

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Intro to DOM</title>
  </head>
  <body></body>
</html>

<script type="text/javascript">
  console.log("This is JS inside HTML document");
  console.log(document.title);
  console.log(document.body);
</script>

Document => html => head and body

DOM => how will it interact =>

clicking => event in JS

An event occurs when the user interacts with the webpage or changes a page

function

console.log("Someone liked me");

Selecting element by id
document.getElementById()

Object or html tag

select element by classnames
document.getElementsByClassName("csk");

tags =>

List of objects

innerHTML
innerText
textContent

In CSS
background-color

In JS
backgroundColor

Camel Case

<startTag/openingTag>text content<endTag/closingTag>

textContent or innerText

tag, class, id, selector, combinator

querySelector

Select only one element
If more than 1 element => condition => returns the 1st element

querySelectorAll

for (var i = 0; i < para.length; i++) {
para[i].style.color = "purple";
para[i].style.fontSize = "30px";
}

Input tags => textContent => Self Closing Tag
inside input tag => value

Login form

email and password
login button => email and password

addeventlistener

element.addEventListener(event,functionName)

button

click

catchValue

click, keydown, keyup, load, change, mouseout, mousein, mouseover

event.target

event will be accessed when addEventListener => event object is created => lot of other functionalities

when will the event be triggered?

When you click on submit button

event.target => HTML element
access, modify, delete
