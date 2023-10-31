let newArr={}
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
    return fetch('https://anapioficeandfire.com/api/books')
    .then(res => res.json())
    .then(data  =>  {
      newArr=[...data]
      renderBooks(newArr)
      console.log(newArr)
      data
    })
    
    };


function renderBooks(books) {
  console.log(books)
  books.forEach(element => {
    
    let add= document.querySelector('main')
    let newEl=document.createElement('div')
    newEl.innerHTML+=`<p>${element.name}</p>`
    add.appendChild(newEl)
    console.log(element.name)
  });
  

}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks(renderBooks);
  
});
