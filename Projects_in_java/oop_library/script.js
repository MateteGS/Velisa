let myLibrary = [];

function Book(title, author, type) {
    //the constructor
    this.title = title;
    this.author = author;
    this.type = type;
}

function Display () {}

Display.prototype.render = function () {

    let htmlUi = "";
    myLibrary.map((book) => {
        htmlUi += `
        <h2>Book Title: ${book.title} </h2>
        <p>Author: ${book.author} </p>
        <p>Type: ${book.type} </p>
        `
    });
    let display = document.getElementById("display");
    display.innerHTML= htmlUi;
};

Display.prototype.clear = function () {
    const myLibraryForm = document.getElementById("libraryForm");
    myLibraryForm.reset();
}

const libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit",addBookToLibrary);

function addBookToLibrary(e) {
    //do stuff here
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let type;
    let computer = document.getElementById("computer");
    let science = document.getElementById("science");
    let fiction = document.getElementById("fiction");

    if(computer.checked) {
        type = computer.value;
    }
    if(science.checked) {
        type = science.value;
    }
    if(fiction.checked) {
        type = fiction.value;
    }

    let book = new Book(title, author, type);

    myLibrary.push(book);
    console.log(myLibrary)
    let display = new Display();

    display.render();
    display.clear();

    e.preventDefault();
}