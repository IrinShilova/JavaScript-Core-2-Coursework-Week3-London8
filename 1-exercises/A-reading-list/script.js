function readingList(books) {
  // Write your code here...
  let parentElement = document.querySelector("#content");   //we find an element which already exists and where we are going to change something;
  let newList = document.createElement("ul"); 
    
  // let someLi = 
  //createElement for each book
  //books.map 
  
  
  
  //we create an empty element, but it's empty, it exists only in memory, we need to create a text and put it here
  let bookText = "";                // we form some text (as html code). And then we will put it to <ul>.
  let className = "";               // we use this var, because we need to switch the style of the book, depending on if it's read or not
  for (let book of books) {
      if (book.alreadyRead) {
        className = "book-item-not-read";  //this style already exist in css 
      } else {
        className = "book-item-read";       // this style also already exist in css
      }
      bookText = bookText.concat(`<li class =${className}> <p>${book.title} by ${book.author}</p> <a href=${book.bookCoverImage}><img src=${book.bookCoverImage}></img>
      </a> </li>`); 
    }
 
    /* after we exit the loop bookText is a string variable which contain html code. 
      to make this string a code, we need to put this string in innerHtml of element newList (newList = document.createElement("ul"));
    */

   newList.innerHTML = bookText; //"<li>book 1</li>" + "<li>book 2</li>" + "<li>book 3</li>";  //now it is a code, not a string;
   parentElement.appendChild(newList); // We need to place newList (with <ul>) in the definite element in document;
}

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780465050659.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    bookCoverImage:
      'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780135957059.jpg',
  },
];

readingList(books);


/*
​
let addTextBtn = document.querySelector("#addArticleBtn");
​
addTextBtn.addEventListener("click", () => {
  let input = document.querySelector("#addArticleInput");
  let newParagraph = document.createElement("p");
  newParagraph.innerText = input.value;
  let parentElement = document.querySelector("#addArticle");
  parentElement.appendChild(newParagraph);
  input.value = ""; // resets the input field
});
*/