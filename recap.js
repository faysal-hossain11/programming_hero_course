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




// const getUsers = new Promise((resolve, reject) => {
//     const usersAvailable = true;
//     const users = ["John", "Alice", "Bob", "Charlie"];

//     if (usersAvailable) {
//         resolve(users);
//     } else {
//         reject("No user data available.");
//     }
// });

// getUsers
//     .then((userNames) => {
//         console.log(userNames);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// Output: ['John', 'Alice', 'Bob', 'Charlie']


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));

// const getUsers = async (url) => {
//     try{
//         const res = await fetch(url)
//         if(!res.ok) {
//             throw new Error("Network response was not ok");
//         }
//         const data = await res.json();
//         console.log(data);

//     } catch(error) {
//         console.error("Fetch error: ", error)
//     }
// }

// getUsers("https://jsonplaceholder.typicode.com/user/1")



// const getComments = async (url) => {
//     try {
//         const res = await fetch(url)
//         if(!res?.ok) {
//             throw new Error("Network response was not ok!");
//         }
//         const data = await res?.json()
//         console.log(data);

//     } catch (error) {
//         console.error("Fetch error: ", error)
//     }
// }

// getComments("https://jsonplaceholder.typicode.com/comments/2")




// const numbers = [22, 32, 23, 33, 21, 55, 78, 99, 101];

// const getOddNumbers = (numbers) => {
//     let sum = 0;
//     let oddNumbers = [];
//     for (const number of numbers) {
//         if (number % 2 !== 0) {
//             oddNumbers.push(number);
//         }
//     }
//     for (const odd of oddNumbers) {
//         sum += odd;        
//     }
//     const avg = sum / oddNumbers.length;
//     return avg.toFixed(2);

// }

// const result = getOddNumbers(numbers);
// console.log(`Sum of odd numbers is ${result}`);



// const numbers = [22, 32, 22, 33, 21, 55, 78, 55, 101, 99, 32, 55, 101];

// const noDuplicateNumbers = (numbers) => {
//     let uniqueNumbers = [];
//     for(const number of numbers) {
//         if(!uniqueNumbers.includes(number)) {
//             uniqueNumbers.push(number)
//         }
//     }
//     return uniqueNumbers;
// }

// const result = noDuplicateNumbers(numbers);
// console.log(`Unique Numbers are: ${result}`);


// for (var i = 0; i < 5; i++) {
//  	 setTimeout(function () {
//  	console.log(i);
//   }, 100);
// }

// let result = Math.pow(2, 2);
// console.log(result);

// const celToFah = (cel) => {
//     const fah = (cel * 9/5) + 32;
//     return fah.toFixed(2);
// }

// const result = celToFah(30);

// console.log(`Temperature in Fahrenheit is ${result}°F`);


// const lowestNumbers = [12, 34, 5, 67, 23, 1, 89, 0];
// const findLowestNumber = (numbers) => {
//     let leastNumber = numbers[0];
//     for(const number of numbers) {
//         if(number > leastNumber) {
//             leastNumber = number;
//         }
//     }
//     return leastNumber;
// }

// const lowest = findLowestNumber(lowestNumbers);
// console.log(`Lowest number is ${lowest}`);




// const prices = [32000, 15000, 20000, 50000, 12000, 30000, 35000];

// const findMaxPrice = (prices) => {
//     let minPrice = prices[0];
//     for(const price of prices) {
//         if(price > minPrice) {
//             minPrice = price;
//         }
//     }
//     return minPrice;
// }

// const result = findMaxPrice(prices);
// console.log(`Maximum price is ${result}`);



// const fetchUsers = async () => {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         if (!res?.ok) {
//             throw new Error("Network response was not ok!");
//         }

//         const users = await res.json();

//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchUsers();





// const fetchComments = async (id) => {
//     try {
//         const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
//         if(!res?.ok) {
//             throw new Error("Network response was not ok!");
//         }

//         const comments = await res.json();
//         console.log(comments);

//     } catch (error) {
//         console.error("Fetch error: ", error)
//     }
// }

// fetchComments(4);

// let x = null;
// x ??= 75;

// console.log(x); // Output: 75


// const product  = [
//     { name: "Laptop", price: 50000, quantity: 2 },
//     { name: "Mobile", price: 20000, quantity: 5 },
//     { name: "Tablet", price: 15000, quantity: 3 }
// ]

// const name =  product[0].stock ?? 0
// console.log(name);


// // simple layer discount calculation


// const discountPrice = (price, discount) => {

//     const updatePrice = price - ((price * discount) / 100);
//     return updatePrice.toFixed(2);
// }

// const price = 12000;
// const discount = 10;
// const result = discountPrice(price, discount);
// console.log(`Discounted price is ${result} taka`);


// // Multi-layer discount calculation
// const multiLayerDiscount = (price, discount1, discount2) => {
//     const firstDiscount = price - ((price * discount1) / 100);
//     const finalPrice = firstDiscount - ((firstDiscount * discount2) / 100);
//     return finalPrice.toFixed(2);

// }

// const price = 2000;
// const discount1 = 10;
// const discount2 = 5;
// const result = multiLayerDiscount(price, discount1, discount2);
// console.log(`Final price after multi-layer discount is ${result} taka`);



// let str = "I love programming in JavaScript";
// str = str.startsWith("I love");
// console.log(str); // Output: true


// function totalFine( fare ) {

//     if(typeof fare !== "number") {
//         return "Invalid";
//     }
//     if(fare <= 0) {
//         return "Invalid";
//     }

//     const fine = fare + fare * (20 / 100) + 30;
//     return fine;

// }

// console.log(totalFine(-20)); // Output: 290.00




// function onlyCharacter(str) {
//     if(typeof str !== "string") {
//         return "Invalid";
//     }

//     const removeSpace = str.replaceAll(" ", "");
//     const result = removeSpace.toUpperCase();
//     return result;

// }

// console.log(onlyCharacter("asd a as a a f")); // Output: "HelloWorld" 




// function bestTeam(player1, player2) {
//     console.log(player2.length);

//     if (typeof player1 !== "object" || player1 === null || Array.isArray(player1) || 
//         typeof player2 !== "object" || player2 === null || Array.isArray(player2)) {
//         return "Invalid";
//     }

//     const team1Score = player1?.foul + player1?.cardY + player1?.cardR;
//     const team2Score = player2?.foul + player2?.cardY + player2?.cardR;

//     if (team1Score < team2Score) {
//         return player1?.name;
//     } else if (team1Score === team2Score) {
//         return "Tie";
//     } else {
//         return player2?.name;
//     }
// }


// console.log(bestTeam(
//    { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
// //    [{name: "Brazil", foul: 5, cardY: 2, cardR: 0}]
// {}
// // 23423
// ));



// function isSame(arr1, arr2) {
//     if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
//         return "Invalid";
//     }

//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false;
//         }
//     }
//     return true;

// }

// console.log(isSame({data: [2 , 5 , 6] } , [2 , 5 , 6])); // Output: true




// function resultReport(marks) {
//     if (!Array.isArray(marks)) {
//         return "Invalid";
//     }

//     let total = 0;
//     let pass = [];
//     let fail = [];
//     for (const mark of marks) {
//         total += mark;

//         if (mark >= 40) {
//             pass.push(mark);
//         } else {
//             fail.push(mark);
//         }
//     }
//     const average =  total / marks.length;

//     const result = {
//         finalScore: Math.round(average),
//         pass: pass.length,
//         fail: fail.length
//     }
//     return result;

// }

// // when i pass parameter as empty array [], this function expect array in some of marks. but got empty array, becouse of that it return "NaN"


// console.log(resultReport([98, 87, 67, 91, 92, 33, 87])); // Output: "Average: 86.25, Highest: 92, Lowest: 78"


// const str = "Javascript is a programming language";

// console.log(str.toLowerCase().startsWith("java"));

// const fileName = "recap.JS";
// console.log(fileName.toLowerCase().endsWith(".js")); // Output: true


// const imageFileName = "department1.JPG";
// const checkImageFileExtension = () => {
//     if (imageFileName.toLowerCase().endsWith(".jpg")) {
//         return "Valid Image File";
//     } else {
//         return "Invalid Image File";
//     }
// }

// console.log(checkImageFileExtension(imageFileName));


// const str = "I Love Programming in JavaScript ";

// console.log(str.toLowerCase().includes("love")); // Output: true

// const fruits = ["apple", "Banana", "cherry", "date"];
// console.log(fruits.filter(fruit => fruit.toLowerCase().includes("banana"))); // Output: ["Banana"]

// for (const fruit of fruits) {

//     if (fruit.toLowerCase().includes("banana")) {
//         console.log(`Found: ${fruit}`);

//     }
// }






// const doctors = [
//     {
//         name: "Dr. Ahsan Rahman",
//         speciality: "Cardiologist",
//         degree: "MBBS, MD (Cardiology)",
//         designation: "Senior Consultant",
//         time: "10:00 AM - 2:00 PM",
//         day: ["Sunday", "Tuesday", "Thursday"],
//         isActive: true,
//         order: 1
//     },
//     {
//         name: "Dr. Farhana Islam",
//         speciality: "Dermatologist",
//         degree: "MBBS, FCPS (Dermatology)",
//         designation: "Associate Professor",
//         time: "3:00 PM - 6:00 PM",
//         day: ["Monday", "Wednesday"],
//         isActive: true,
//         order: 2
//     },
//     {
//         name: "Dr. Kamrul Hasan",
//         speciality: "Neurologist",
//         degree: "MBBS, MD (Neurology)",
//         designation: "Professor",
//         time: "11:00 AM - 1:00 PM",
//         day: ["Sunday", "Tuesday", "Friday"],
//         isActive: false,
//         order: 3
//     },
//     {
//         name: "Dr. Nusrat Jahan",
//         speciality: "Pediatrician",
//         degree: "MBBS, DCH, FCPS (Pediatrics)",
//         designation: "Consultant",
//         time: "9:00 AM - 12:00 PM",
//         day: ["Monday", "Thursday"],
//         isActive: true,
//         order: 4
//     },
//     {
//         name: "Dr. Mahmudul Alam",
//         speciality: "Orthopedic Surgeon",
//         degree: "MBBS, MS (Orthopedics)",
//         designation: "Assistant Professor",
//         time: "4:00 PM - 8:00 PM",
//         day: ["Tuesday", "Friday"],
//         isActive: true,
//         order: 5
//     },
//     {
//         name: "Dr. Shirin Akter",
//         speciality: "Gynecologist",
//         degree: "MBBS, FCPS (Gynecology & Obstetrics)",
//         designation: "Senior Consultant",
//         time: "2:00 PM - 5:00 PM",
//         day: ["Sunday", "Wednesday"],
//         isActive: false,
//         order: 6
//     },
//     {
//         name: "Dr. Rashedul Karim",
//         speciality: "ENT Specialist",
//         degree: "MBBS, MS (ENT)",
//         designation: "Consultant",
//         time: "6:00 PM - 9:00 PM",
//         day: ["Monday", "Thursday"],
//         isActive: true,
//         order: 7
//     },
//     {
//         name: "Dr. Laila Hossain",
//         speciality: "Psychiatrist",
//         degree: "MBBS, MD (Psychiatry)",
//         designation: "Associate Professor",
//         time: "10:00 AM - 1:00 PM",
//         day: ["Tuesday", "Friday"],
//         isActive: true,
//         order: 8
//     },
//     {
//         name: "Dr. Abdullah Mahfuz",
//         speciality: "Oncologist",
//         degree: "MBBS, MD (Oncology)",
//         designation: "Professor",
//         time: "12:00 PM - 3:00 PM",
//         day: ["Sunday", "Thursday"],
//         isActive: true,
//         order: 9
//     },
//     {
//         name: "Dr. Rubina Sultana",
//         speciality: "Nephrologist",
//         degree: "MBBS, MD (Nephrology)",
//         designation: "Consultant",
//         time: "5:00 PM - 7:00 PM",
//         day: ["Wednesday", "Friday"],
//         isActive: false,
//         order: 10
//     }
// ];


// findByDoctors = (doctors, search) => {
//     if (!Array.isArray(doctors) || doctors.length === 0) {
//         return "No doctors found";
//     }

//     let searchResults = [];
//     for (const doctor of doctors) {
//         if(doctor?.speciality.toLowerCase().includes(search.toLowerCase())) {
//             searchResults.push(doctor);
//         }
//     }
//     return searchResults;

// }


// const result = findByDoctors(doctors, "cardiologist");
// console.log(result);








const user = {
    name: 'Rahim',
    address: { city: 'Dhaka' }
};

const stockCheck = user?.address?.stock ?? 0;
console.log(stockCheck);


