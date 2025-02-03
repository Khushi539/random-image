
//9.Write a function to dynamically update the content of a <div> based on data received from an object.
let data = {
    title: "want",
    description: "strong independent woman",
    who: "she",
    Name: "dont know",
};

function changeContent() {
    let updation = document.querySelector(".main");

    updation.innerHTML = `<h1>${data.title}</h1><p>${data.description}</p><p>${data.who}</p><p>${data.Name}</p>`;
}
changeContent();