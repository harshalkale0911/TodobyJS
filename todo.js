



// // const submit = document.getElementById("submit")
// // const todolist = document.getElementById("todo-list")

// // submit.addEventListener("click" , ()=>{
// //     const newtodo = document.createElement("li")
   
// //     todolist.appendChild(newtodo)
// // })

//  function addtask(){
    
//     const newtask = document.createElement("li")
//     const todolist = document.getElementById("todo-list")

   
//     newtask.textContent = document.getElementById("todo-input").value
//     document.getElementById("todo-input").value = ""
//     todolist.appendChild(newtask)
//     deletetodo(newtask) ;
//     edittodo(newtask)
//  }

//  function deletetodo(newtask){
//     const deletebutton = document.createElement("button")
    
//     deletebutton.textContent="delete" 
//     newtask.appendChild(deletebutton)

//     deletebutton.addEventListener("click" , ()=>{
//     newtask.remove()
//     })
      
//  }

//  function edittodo(newtask){
//  const editbtn = document.createElement("button") 
//  editbtn.textContent = "edit" 
//  newtask.appendChild(editbtn)
//  editbtn.addEventListener("click" , function(){
//     const taskContent = newtask.firstChild;
//     const editedText = prompt("edit todos :--> " ,taskContent.textContent)
//     if (editedText) {
//             taskContent.textContent = editedText;
//         }
//  })
//  }




function addTask() {
    const newTask = document.createElement("li");
    const taskList = document.getElementById("taskList");
    
    // Add task text
    newTask.textContent = document.getElementById("inputTask").value;
    
    // Clear input after adding
    document.getElementById("inputTask").value = "";
    
    // Create a container for task actions (edit/delete)
    const actionContainer = document.createElement("div");
    actionContainer.classList.add("action-container");

    // Add delete and edit buttons
    deleteTask(newTask, actionContainer);
    editTask(newTask, actionContainer);
    
    // Append the task and its action container
    newTask.appendChild(actionContainer);
    taskList.appendChild(newTask);
}

function deleteTask(newTask, actionContainer) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
        newTask.remove();
    });

    actionContainer.appendChild(deleteBtn);
}

function editTask(newTask, actionContainer) {
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    editBtn.addEventListener("click", function () {
        const taskContent = newTask.firstChild;
        const editedText = prompt("Edit your task:", taskContent.textContent);
        
        if (editedText) {
            taskContent.textContent = editedText;
        }
    });

    actionContainer.appendChild(editBtn);
}