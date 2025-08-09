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


// const numbers = [11, 22, 234, 44, 55];
// const make_avg = (numbers) => {
//     let sum = 0;
//     for (const num of numbers) {
//         sum += num    
//     }
//     const avg = sum / numbers?.length;
//     return avg;       
// }

// const result = make_avg(numbers);
// console.log(result);



// const phones = [
//     { name: 'Samsung', price: 20000, camera: '12mp', color: 'black' },
//     { name: 'xoami', price: 18000, camera: '12mp', color: 'black' },
//     { name: 'Oppo', price: 30000, camera: '12mp', color: 'black' },
//     { name: 'Iphone', price: 100000, camera: '12mp', color: 'black' },
//     { name: 'Walton', price: 31000, camera: '12mp', color: 'black' },
//     { name: 'HTC', price: 27000, camera: '12mp', color: 'black' },
// ]


// const getCheapestPhone = (phones) => {
//     let cheapestPrice = phones[0];

//     for(const phone of phones) {
//         if(phone?.price < cheapestPrice?.price) {
//             cheapestPrice = phone;
//         }
//     }
//     return cheapestPrice;
// }

// const cheapestPricePhone = getCheapestPhone(phones);
// console.log(`Cheapest phone is ${cheapestPricePhone?.name} and price is ${cheapestPricePhone?.price}`);


// const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000];
// const getMinPrice = (prices) => {
//     let minPrice = prices[0];
//     for(const price of prices) {
//         if(price < minPrice) {
//             minPrice = price;
//         }
//         console.log(price);

//     }
//     return minPrice;
// }

// const result = getMinPrice(prices);
// console.log(`Minimum price is ${result}`);


// const products = [
//     { name: 'shampoo', price: 300, quantity: 2 },
//     { name: 'chiruni', price: 100, quantity: 3 },
//     { name: 'shirt', price: 700, quantity: 5 },
//     { name: 'pant', price: 1200, quantity: 1 },
// ]

// const getTotalPrice = (products) => {
//     let disToPrice = 0;
//     for(const product of products) {
//         const totalPrice = product?.price * product?.quantity;
//         console.log(totalPrice);

//         if(totalPrice?.price === 2000 && product?.quantity === 4) {
//             // const discountPrice = product?.price 

//         }
//     }
//     return disToPrice;
// }

// const result = getTotalPrice(products);
// console.log(`Total price of product is ${result}`);


// const heights2 = [167, 190, 120, 165, 137];
// const getLowestNumber = (lowestNumbers) => {
//     let lowest = lowestNumbers[0];
//     for (const number of lowestNumbers) {
//         if(number < lowest) {
//             lowest = number;
//         }
//     }
//     return lowest;
// }

// const result = getLowestNumber(heights2);
// console.log(`Lowest Number is ${result}`);


// const smallestName = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// const findSmallestName = (names) => {
//     let smallName = names[0];
//     for (const name of names) {
//         if(name?.length < smallName?.length) {
//             smallName = name;
//         }
//     }
//     return smallName;
// }

// const result = findSmallestName(smallestName);
// console.log(`Smallest name is ${result}`);




// laptop = 35000 tk
// tablet = 15000 tk
// mobile = 20000 tk


// const calculateElectronicsBudget = (laptop, tablet, mobile) => {
//      const totalBudget = laptop + tablet + mobile;    
//      return totalBudget;
// }

// const result = calculateElectronicsBudget(35000, 15000, 20000);
// console.log(`Total budget is ${result} taka`);


// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];


// const findAveragePhonePrice = (phones) => {

//     let totalPhonePrice = 0
//     for (const phone of phones) {
//         totalPhonePrice += phone?.price;
//     }
//     const averagePhonePrice = (totalPhonePrice / phones?.length);
//     return averagePhonePrice.toFixed(2);

// }
// const result = findAveragePhonePrice(phones);
// console.log(`Average phone price is ${result} taka`);


// const employees = [
//     { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//     { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//     { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//     { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
// ];

// const calculateCurrentSalary = (employees) => {

//     let currentSalary = 0;
//     for (const employee of employees) {
//         const startingSalary = employee?.starting;

//         for (let i = 0; i < employee?.experience; i++) {
//             currentSalary += (startingSalary + (employee?.increment * i))
//         }
//         currentSalary += startingSalary; 
//     }
//     return currentSalary.toFixed(2);

// }

// const result = calculateCurrentSalary(employees);
// console.log(`Current salary is ${result} taka`);



// const employees = [
//     { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//     { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//     { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//     { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
// ];

// const calculateTotalCurrentSalary = (employees) => {
//     if(!employees || employees.length === 0) {
//         return "No employees found";
//     }

//     let totalCurrentSalary = 0;

//     for(const employee of employees) {
//         const currentSalary = employee?.starting + (employee?.experience * employee?.increment);
//         totalCurrentSalary += currentSalary; 
//         console.log(`Current salary of ${employee?.name} is ${currentSalary} taka`);
        
//     }
//     return totalCurrentSalary;
// };

// const result = calculateTotalCurrentSalary(employees);
// console.log(`Current total salary is ${result} taka`);
