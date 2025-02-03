//Write a function to listen for a change event on a <select> dropdown and log the selected value.
function select(event) {
    console.log(event.target.value);   
}
var dropdown = document.getElementById("dropdown");
dropdown.addEventListener("change", select);

