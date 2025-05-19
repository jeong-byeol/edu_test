// const shoppingList = ["milk", "eggs", "bread"];
// shoppingList.push("butter"); // ["milk", "eggs", "bread", "butter"]
// shoppingList.pop();          // ["milk", "eggs", "bread"]

// shoppingList.forEach(item => {
//     console.log(item); // milk, eggs, bread
// });
// // --------------
// const fruits = ["apple", "banana", "cherry"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]); // apple, banana, cherry
// }
// -------------------
// const fruits = ["apple", "banana", "cherry"];

// for (const fruit of fruits) {
//     console.log(fruit); // apple, banana, cherry
// }
// ---------------
// const car = new Object();
// car.brand = "Tesla";
// car.model = "Model S";
// car.year = 2022;
// --------------
// const person = { name: "철수", age: 30,};
// person.mark = 39;
// for (const key in person) {
//     console.log(`${key}: ${person[key]}`);
// }
// ---------------
// const person = {
//     name: "철수",
//     age : 498,
//     friend: "종현",
    
//     greet: function(hobby) { 
//         console.log(`안녕하세요, 저는 ${this.name}입니다. 제 나이는 ${this.age}이고, 제 친구는 ${this.friend}이고, 제 취미는 ${hobby}입니다.`);
//     }
// };
// person.greet("운동");
// ------------------
// const fruits = ["apple", "banana", "cherry", "tomato", "orange", "melon"];
// fruits.splice(1, 4, "frpat"); // 1번째 인덱스부터 4개 삭제
// fruits.push("m")
// fruits.push("i")

// console.log(fruits);
//----------------
// const person = {};

// Object.defineProperty(person, "name", {
//   value: "철수",
//   writable: false, // 수정 불가능
// });

// console.log(person.name); // "철수"
// person.name = "영희"; // 무시됨
// console.log(person.name); // "철수"
//---------------
// const person ={};

// Object.defineProperties(person, {
//     name: {value:'철수', writable: true}, //true수정가능
//     age: {value: 30, writable: false}, //false수정불가능
// });

// console.log(person.name);
// console.log(person.age);
//--------------
// const person = { name: "철수", age: 30 };

// console.log(person.hasOwnProperty("name")); // true
// console.log(person.hasOwnProperty("job")); // false
//--------------
// 스프레드
// const user =['w', 'r', 'f'];
// const user2 ='t';
// const result = [...user, user2];
// console.log(result);
// 또는
// let infos = [
//     {name: '재원', age: 33},
//     {name: '미친' , age: 21},
//     {name: '올지', age: 78},
// ];
// const newinfos = infos.map(info => [{...info, age : 40}]);
// console.log(newinfos);
// --------------

// function makeCalculator() {
//   let displayValue = 0;

//   return {
//     add: function(num) {
//       displayValue = displayValue + num;
//     },
//     subtract: function(num) {
//       displayValue = displayValue - num;
//     },
//     multiply: function(num) {
//       displayValue = displayValue * num;
//     },
//     divide: function(num) {
//       displayValue = displayValue / num;
//     },
//     reset: function() {
//       displayValue = 0;
//     },
//     display: function() {
//       return displayValue
//     }
//   }
// }

// const cal = makeCalculator();
// console.log(cal.display()); // 0
// cal.add(1);
// console.log(cal.display()); // 1
// //console.log(displayValue) // ReferenceError: displayValue is not defined
// -------------


