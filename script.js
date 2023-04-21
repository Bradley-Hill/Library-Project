let grandLibrary = []

function Book(author,title,pages,publishDate,status){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.publishDate = publishDate;
    this.status = status;
}

function addBookToLibrary(author,title,pages,publishDate,status){
    let book = Object.create(Book.prototype);
    Book.call(book,author,title,pages,publishDate,status);
    grandLibrary.push(book);
}