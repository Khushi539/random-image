//Select all <button> elements with the class primary and change their background color to a gradient.
let buttons = document.querySelectorAll(".primary");

buttons.forEach(button => {
    button.style.background = "linear-gradient(to right ,orange,yellow)";
});