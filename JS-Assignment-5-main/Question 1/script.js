// 1.Create a button and div using JS, when clicked on the button your basic details should be shown in the div. The static html file should only contain the basic HTML structure, no div/buttons .
const div = document.createElement("div");
document.body.append(div);
div.innerHTML = "Name:Akshay <br> Age:22 <br> Place: Calicut <br> Qualification:Btech ECE ";

const button = document.createElement("button");
document.body.append(button);
button.innerHTML = "Hide/Show Details";

button.addEventListener("click", function (event) {
    const style = window.getComputedStyle(div);

    if (style.display == "block") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }
})