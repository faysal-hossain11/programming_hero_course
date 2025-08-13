
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




/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var salaryWithIncrement = startingSalary;

for(var i = 1; i <= experience; i++ ) {
  salaryWithIncrement = salaryWithIncrement + ((salaryWithIncrement * 5) / 100)
}
currentSalary = salaryWithIncrement.toFixed(2);

console.log(currentSalary);




















function totalFine( fare ) {

    if(typeof fare !== "number") {
        return "Invalid";
    }
    if(fare <= 0) {
        return "Invalid";
    }

    const fine = fare + fare * (20 / 100) + 30;
    return fine;
    
}






function onlyCharacter(str) {
    if(typeof str !== "string") {
        return "Invalid";
    }

    const removeSpace = str.replaceAll(" ", "");
    const result = removeSpace.toUpperCase();
    return result;
    
}






function bestTeam(player1, player2) {
    if (typeof player1 !== "object") {
        return "Invalid";
    }
    if (typeof player2 !== "object") {
        return "Invalid";
    }
    const team1Score = player1?.foul + player1?.cardY + player1?.cardR;
    const team2Score = player2?.foul + player2?.cardY + player2?.cardR;

    if (team1Score < team2Score) {
        return player1?.name;
    } else if (team1Score === team2Score) {
        return "Tie";
    } else {
        return player2?.name;
    }
}







function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    if (arr1.length !== arr2.length) {
        return false;
    }
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;

}









function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let total = 0;
    let pass = [];
    let fail = [];
    for (const mark of marks) {
        total += mark;

        if (mark >= 40) {
            pass.push(mark);
        } else {
            fail.push(mark);
        }
    }
    const average =  total / marks.length;
    
    const result = {
        finalScore: Math.round(average),
        pass: pass.length,
        fail: fail.length
    }
    return result;

}

// when i pass parameter as empty array [], this function expect array in some of marks. but got empty array, because of that it return "NaN"


