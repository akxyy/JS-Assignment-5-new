// 3.Create a toggle button, console the values as either true/ false when toggled.
const button = document.getElementById("toggleButton");
let isToggled = true;
button.addEventListener("click", function (event) {
    if (isToggled) {
        isToggled = false;
        console.log(isToggled);
    }
    else {
        isToggled = true;
        console.log(isToggled);
    }
});