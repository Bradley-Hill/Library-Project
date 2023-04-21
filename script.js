let grandLibrary = [{
    author: 'Joe Abercrombie',
    title:'The Heroes',
    pages: 289,
    publishDate: 2011, 
    haveRead:true}]

function Book(author,title,pages,publishDate,haveRead){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.publishDate = publishDate;
    this.haveRead = haveRead;
}

function addBookToLibrary(author,title,pages,publishDate,haveRead){
    let book = Object.create(Book.prototype);
    Book.call(book,author,title,pages,publishDate,haveRead);
    grandLibrary.push(book);
}

console.log(grandLibrary)