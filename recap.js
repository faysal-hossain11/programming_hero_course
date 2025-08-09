// const fruits = ["faysal", "towhid", "jahid", "sadik", "aslam"];

// fruits[2] = "saddam" 
// console.log(fruits)


// const touris = ['sylhet', 'satkhira', 'chatpur']
// touris.push('bandorbon');
// touris.push('khulna', 'borishal')
// touris.pop()
// console.log(touris);


// const books = ['bangla', 'english', 'match', 'physics', 'chamictry']
// console.log(books.includes('english'));


// const str = "I Love A javascript A"

// let count = 0;

// for (let char of str) {
//     if(char === 'a' && char === 'A') {
//         count++;
//     }
// }

// console.log(count);

// const numbers = [1, 2, 3, 4, 5];

// const filtered = numbers?.filter((num) => num % 2 === 0);

// console.log(filtered);


// const users = [
//   { name: "Alice", active: true },
//   { name: "Bob", active: false },
//   { name: "Charlie", active: true }
// ];

// const activeUser = users?.filter((user) => !user?.active); 
// console.log(activeUser);

// const mixedArray = [0, "Hello", false, 42, "", null, "JavaScript", undefined];

// const falesyValue = mixedArray.filter(Boolean)
// console.log(falesyValue);



// const products = ["Laptop", "Phone", "Tablet", "Monitor"];
// const search = "mo";

// const filterProduct = products.filter((item) => item.toLowerCase().includes(search.toLowerCase()));

// console.log(filterProduct);



// const dates = [
//   new Date("2025-07-01"),
//   new Date("2025-09-15"),
//   new Date("2025-05-20")
// ];

// const today = new Date();
// const filterDate = dates.filter(date => date > today);
// console.log(filterDate);

// const users = [
//   {
//     name: "Alice",
//     purchases: [
//       { amount: 50, date: "2025-07-01" },
//       { amount: 300, date: "2025-07-25" }
//     ]
//   },
//   {
//     name: "Bob",
//     purchases: [
//       { amount: 20, date: "2025-06-10" },
//       { amount: 40, date: "2025-07-10" }
//     ]
//   },
//   {
//     name: "Charlie",
//     purchases: [
//       { amount: 500, date: "2025-07-29" }
//     ]
//   }
// ];

// // Criteria: at least one purchase over $200 in the last 7 days
// const sevenDaysAgo = new Date();
// sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

// const highValueRecent = users.filter(user =>
//   user.purchases.some(p => 
//     p.amount > 200 && new Date(p.date) >= sevenDaysAgo
//   )
// );

// console.log(highValueRecent);
// // Returns Alice (purchase 300 on July 25 if within 7 days) and Charlie




// const items = [
//   { id: 1, category: "A", score: 10 },
//   { id: 2, category: "B", score: 5 },
//   { id: 1, category: "A", score: 15 }, // duplicate id with higher score
//   { id: 3, category: "A", score: 7 }
// ];

// const uniqueById = Object.values(

// )


// /** Problem 06 :  (Current Salary )  */
// var experience = 30;
// var startingSalary = 45000;
// //write your code here

// var salaryWithIncrement = startingSalary;

// for(var i = 1; i <= experience; i++ ) {
//   salaryWithIncrement = salaryWithIncrement + ((salaryWithIncrement * 5) / 100)
// }
// currentSalary = salaryWithIncrement.toFixed(2);

// console.log(currentSalary);


// function checkPassOrFail(marks) {
//    if (marks <= 40) {
//       console.log("Pass");
//    } else {
//       console.log("Fail!");
//    }
// }

// checkPassOrFail(50)


// setTimeout(() => {
//    console.log("wait 3 seconds");
// }, 3000);

// let num = 131;
// setInterval(() => {
//    num++
//    console.log(num);
   
// }, 1000)



// without reverse() call
// const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// console.log(colors?.reverse());

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// for (number of numbers) {
//     if(number % 2 === 0) {
//         console.log(number);
//     }
    
// }

// while(number of numbers)

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// console.log(numbers.join(" "));


// const statement = 'I am a hard working person';

// const rStatem = statement.split(" ").reverse().join(" ")
// console.log(rStatem);

// const ary = [1, 3, 5]
// console.log(ary);
// ary.unshift(99)
// console.log(ary);

// const students = [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]

// for(const student of students) {
//     console.log(`${student?.name} score ${student?.marks}`);
    
// }


// const ary = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]
// console.log(ary);
// ary[1][0] = 99
// console.log(ary);


// const numbers = [23, 34, 55, 124, 35];

// const sumFunction = (numbers) => {
//   let sum = 0
//   for(const number of numbers) {
//     console.log(number);
//     sum = sum + number;
//   }
//   return sum;
// }

// const result = sumFunction(numbers);
// console.log(result);


// const evenNumbers = (numbers) => {
//   // let evenAry = [];
//   let sum = 0;
//   for(const number of numbers) {
//     if(number % 2 === 0) {
//       // evenAry.push(number)
//       sum += number
//     }
//   }
//   return sum;
// }

// const even = evenNumbers(numbers);
// console.log(`Even numbers : ${even}`);


// const multiply = (a, b, c, d) => {
//     return a * b * c * d;
// }

// const multValues = [3, 8, 10, 12]
// const multiplyNumbers =  multiply(...multValues);
// console.log(multiplyNumbers);


// const myFunction = (number) => {
//     if(number % 2 === 0) {
//         return number * 2
//     } else {
//         return number / 2
//     }
// }

// const number = 32
// const result = myFunction(number)
// console.log(result);


const numbers = [11, 22, 234, 44, 55];
const make_avg = (numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num    
    }
    const avg = sum / numbers?.length;
    return avg;       
}

const result = make_avg(numbers);
console.log(result);

