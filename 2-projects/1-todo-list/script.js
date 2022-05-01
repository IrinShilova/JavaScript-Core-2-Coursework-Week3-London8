function populateTodoList(todos) {
    
  
  let list = document.getElementById("todo-list");     // this <ul> element already exist, and now we going to fill it. Now it's empty because we removed all its content from html;
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  // now we need to add <li> elements to this <ul>. 

  let toDoItem = document.createElement("li");    //<li></li>; it's empty;
  toDoItem.innerText = "hello world";             // this is our text between <li>; 
  toDoItem.className = "list-group-item d-flex justify-content-between align-items-center";   //Where could I find this class? (I found it in other people repo)
  
  // now we need to add icons to this <li> element. 
  // to do this we need to add <span>

  let span = document.createElement("span");
  span.className = "badge bg-primary rounded-pill";       // where do we define this class? 
  let iconDelete = document.createElement("i"); 
  iconDelete.className = "fa fa-trash";                   // where do we define this class? 

  let iconCheck = document.createElement("i"); 
  iconCheck.className = "fa fa-check";                    // where do we define this class? 

  span.appendChild(iconDelete);    
  span.appendChild(iconCheck);
  toDoItem.appendChild(span); 
  list.appendChild(toDoItem); 

  // now we need to add eventListener to this icons

  iconDelete.addEventListener("click", ()=>{
    list.removeChild(toDoItem);                         //it's opposite list.appendChild(line 27)
  }) 

  iconCheck.addEventListener("click", () => {
    toDoItem.style.textDecoration = "line-through";
  })


}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];


populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
