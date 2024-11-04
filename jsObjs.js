const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("John says Hi");
  },
};

// console.log(person.name);

// person.greet();

let student = {
  name: "Jane",
};

student.age = 30;

// Add a new method

student.greet = function () {
  console.log("Hello");
};

// console.log(student);

// student.greet();

const car = {
  make: "Tata",
  model: "Tiago",
  manufactured: { month: "November", year: 2022 },
};

const keys = Object.keys(car);

// console.log(keys.filter((k) => k !== "year"));

const values = Object.values(car);

// console.log(values);

const book = {
  title: "1984",
  author: "George Orwell",
  year: 1949,
  manufactured: { month: "November", year: 2022 },
};

const entries = Object.entries(book);

console.log(entries);

const target = { a: 2, b: 3 };
const source = { b: 5, c: 4 };

const returnObj = Object.assign(target, source);

// console.log(returnObj);

// Cloning an Object
const original = { name: "Jane", age: 30 };
const clone = Object.assign({}, original);

Object.seal(original);

original.name = "Jane Doe";
delete original.age;
console.log(original);

console.log(Object.isFrozen(original));
