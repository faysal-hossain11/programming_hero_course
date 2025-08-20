document.getElementById("post_btn").addEventListener("click", function() {

    const textValue = document.getElementById("post_text");
    const newComment = textValue.value;
    
    const parent = document.getElementById("comments-container");
    
    const createElement = document.createElement("p");
    createElement.classList.add("paragraph")
    createElement.innerText = newComment;

    parent.appendChild(createElement)

    textValue.value = " "
    
});
