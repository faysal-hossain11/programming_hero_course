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

