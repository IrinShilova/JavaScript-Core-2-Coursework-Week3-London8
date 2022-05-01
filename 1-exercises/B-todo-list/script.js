function todoList(todos) {
  // Write your code here...
  let parentElement = document.querySelector("#content");
  let newList = document.createElement("ul");
  let toDoText = ""; 

  for(let element of todos) {
    toDoText = toDoText + `<li>${element["todo"]}</li>`; // toDoText is just a string, a text. It contains html code, but it's just a text for browser
  }
 
//create li using js 


  newList.innerHTML = toDoText;   //if we want to make this text as markup, we put this text in innerHTML; 
  parentElement.appendChild(newList); 

  let toDoLine = document.querySelectorAll("li");    //toDoLine looks like array;
  for(let eachLi of toDoLine) {
    eachLi.addEventListener("click", () => {
      if (eachLi.style.textDecoration === "line-through") {             //we switch style of each li
          eachLi.style.textDecoration = "none";                         // if it's already line-through, then remove this line
      } else {
      eachLi.style.textDecoration = "line-through";
      }
    })
  }
  

}




const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);

