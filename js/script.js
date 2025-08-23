// document.getElementById("post_btn").addEventListener("click", function() {

//     const textValue = document.getElementById("post_text");
//     const newComment = textValue.value;

//     const parent = document.getElementById("comments-container");

//     const createElement = document.createElement("p");
//     createElement.classList.add("paragraph")
//     createElement.innerText = newComment;

//     parent.appendChild(createElement)

//     textValue.value = " "

// });



function generateRandomColor() {
    let maxVal = 0xFFFFFF; // 16777215 (decimal equivalent of FFFFFF)
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    let hexColor = randomNumber.toString(16); // Convert to hexadecimal
    // Pad with leading zeros if necessary to ensure 6 characters
    hexColor = hexColor.padStart(6, '0');
    return `#${hexColor.toUpperCase()}`;
}

document.getElementById("body_bg").addEventListener("click", function () {
    document.body.style.backgroundColor  = generateRandomColor();
})