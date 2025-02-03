document.getElementById("todolist").addEventListener("click", function () {
    const task = document.getElementById("newTask").value;
    if (task.trim() === "") return;

    let list = document.getElementById("todo-List");
    let newItem = document.createElement("li");
    
    newItem.textContent = task;
    list.appendChild(newItem);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    newItem.appendChild(deleteBtn);
    deleteBtn.classList.add("deleteBtn")
    
    deleteBtn.addEventListener("click", function () {
        newItem.remove();
    });
    
    taskText = document.createElement("span");
    taskText.textContent = text;
    newItem.appendChild(taskText);
    
    
    document.getElementById("newTask").value="";
    
});
//white resume, eassy readble font,no github code links,create achual hosted live link,make sure thare are no spelling mist...,less personal details,more company usefull deteails,mantion linkdin ,github,gmail,contack no. address,ak achha introduction gpt se likhba k ratlo,therialy question which in interview ,simple js coding which are usually ask in interviews
//20 vasics trecy question