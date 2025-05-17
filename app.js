
// Array Destructuring Tasks


const fruits = ["apple", "banana", "mango"];

const [fruit1, fruit2] = fruits;

console.log("fruit1, fruit2 ==> ", fruit1, fruit2);



// 2. Swap Variables

let a = 5;

let b = 10;

[a,b = b,a]

console.log("a,b ==> ", a,b);


// 3. Destructuring with Default Values

const colors = ["red"];

const [color1, color2 = "green", color3 = "blue"] = colors;

console.log("color1, color2, color3 ==> ", color1, color2, color3); 


// 4. Skip Items in Array

const numbers = [10, 20, 30];

const [first, , third] = numbers;

console.log("first, third ==> ", first, third);


// 5. Rest Operator in Destructuring

const nums = [1, 2, 3, 4, 5];

const [numFirst, ...others] = nums;

console.log("numFirst, others ==> ", numFirst, ...others);


// Object Destructuring Tasks

// 6. Basic Object Destructuring

const person = { name: "Ali", age: 25, city: "Lahore" };

const { name, age } = person;

console.log("name, age ==> ", name, age);

// 7. Rename Variables While Destructuring

const user1 = { name: "Sara", email: "sara@gmail.com" };

const { name: personName } = user1;

console.log("personName ==> ", personName);

// 8. Default Values in Object Destructuring

const book = { title: "JavaScript Basics" };

const { title, rating = 5 } = book;

console.log("title, rating ==> ", title, rating);

// 9. Nested Object Destructuring

const user2 = {
  id: 1,
  address: {
    city: "Islamabad",
    zip: "44000"
  }
};

const { address: { city }} = user2;

console.log("city ==> ", city);

// 10. Partial Object Destructuring

const laptop = {
  brand: "Dell",
  model: "XPS 13",
  price: 250000,
  color: "Silver"
};

const { brand, model } = laptop;

console.log("brand, model ==> ", brand, model);


// Function Parameter Destructuring

// 11. Destructure in Function Parameters (Object)

function greet({ name, role }) {
  console.log(`Hello ${name}, your role is ${role}`);
}

greet({ name: "Osama", role: "Teacher" });


// 12. Destructure in Function Parameters (Array)

function add([x, y]) {
  return x + y;
}

console.log("x+y --> ", add([5, 7])); 

// 13. Return Multiple Values from Function

function getUserInfo() {
  return ["Ali", "ali@example.com"];
}
const [userName, userEmail] = getUserInfo();

console.log("userName, userEmail ==> ", userName, userEmail);

// 14. Destructure from Array of Objects

const posts = [
  { id: 1, title: "Hello" },
  { id: 2, title: "World" }
];

const [{ title: title1 }, { title: title2 }] = posts;

console.log("title --->", title1, title2); 

// 15. Destructure Object with Array Property

const developer = {
  name: "Ali",
  skills: ["JavaScript", "React", "Node"]
};

const { skills: [firstSkill] } = developer;

console.log("firstSkill ==> ", firstSkill);