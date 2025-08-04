
/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here

var result1 = area / 2
console.log(result1);




/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here

if (money >= 25000) {
    console.log("Laptop");
} else if (money >= 10000) {
    console.log("Cycle");
} else {
    console.log("Chocolate");
}





/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here

for (var i = 1; i <= lastDay; i++) {

    if (i % 3 === 0) {
        console.log(`${i} - medicine`);
    } else {
        console.log(`${i} - rest`);
    }

}





/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here

if (fileName.startsWith("#")) {
    console.log("Store");
} else if (fileName.endsWith(".pdf") || fileName.endsWith(".docx")) {
    console.log("Store");
} else {
    console.log("Delete");
}






/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here

var updateName = student?.name.trim().toLowerCase();
var updateDepartment = student?.department.trim().toLowerCase();
var updateRoll = student?.roll.toString();

console.log(`${updateName}${updateRoll}.${updateDepartment}@ph.ac.bd`);




