let grandLibrary = [{
    author: 'Joe Abercrombie',
    title: 'The Heroes',
    pages: 389,
    publishDate: 2011,
    haveRead: true
},
{
    author: 'Terry Pratchett',
    title: 'Thud!',
    pages: 268,
    publishDate: 2005,
    haveRead: false
}]

const gridContainer = document.getElementById('grid-container')
const addBookButton = document.getElementById('add-entry');

//for loop populating the grid with books
function updateLibraryDisplay() {
    gridContainer.innerHTML = '';
    for (let i = 0; i < grandLibrary.length; i++) {
        const book = grandLibrary[i];
        const card = document.createElement('div');
        card.classList.add('library-card');

        const title = document.createElement('h2');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.textContent = book.author;

        const pages = document.createElement('p');
        pages.textContent = `${book.pages} pages`;

        const publishDate = document.createElement('p');
        publishDate.textContent = `Published in ${book.publishDate}`;

        const haveRead = document.createElement('p');
        haveRead.textContent = book.haveRead ? 'Read' : 'Not read';

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(publishDate);
        card.appendChild(haveRead);

        gridContainer.appendChild(card);
    }
}

//Constructor Function
function Book(author, title, pages, publishDate, haveRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.publishDate = publishDate;
    this.haveRead = haveRead;
}

function addBookToLibrary(author, title, pages, publishDate, haveRead) {
    grandLibrary.push(new Book(author, title, pages, publishDate, haveRead));
    updateLibraryDisplay();
}


addBookButton.onclick = function () {
    addBookToLibrary('Nicholas Eames', 'Kings of the Wyld', 422, 2017, true);
    updateLibraryDisplay()
}

updateLibraryDisplay()
console.log(grandLibrary)