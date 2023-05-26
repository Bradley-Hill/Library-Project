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
    publishDate: 2007,
    haveRead: false
}]

const gridContainer = document.getElementById('grid-container');
const addBookButton = document.getElementById('add-entry');
const formContainer = document.getElementById('book-form');
const submitButton = document.getElementById('submit-button');
const cancelButton = document.getElementById('cancel-button');


//Class for book objects.
class Book {
    constructor(author, title, pages, publishDate, haveRead){
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.publishDate = publishDate;
        this.haveRead = haveRead;
    }
}

function toggleHaveRead(index) {
    grandLibrary[index].haveRead = !grandLibrary[index].haveRead;
    updateLibraryDisplay();
}

function submitForm(event) {
    event.preventDefault();
    console.log('submitForm');
    const author = document.getElementById('author-input').value;
    const title = document.getElementById('title-input').value;
    const pages = document.getElementById('pages-input').value;
    const publishDate = document.getElementById('publishDate-input').value;
    const haveRead = document.getElementById('haveRead-input').checked;
    const book = new Book(author, title, pages, publishDate, haveRead);
    addBookToLibrary(book);
    hideForm();
    document.getElementById('author-input').value = '';
    document.getElementById('title-input').value = '';
    document.getElementById('pages-input').value = '';
    document.getElementById('publishDate-input').value = '';
    document.getElementById('haveRead-input').selectedIndex = 0;
}

function showForm() {
    console.log('Clicked');
    formContainer.style.display = 'block';
}

function hideForm() {
    formContainer.style.display = 'none'
}

addBookButton.onclick = showForm;

submitButton.onclick = function (event) {
    submitForm(event);
}

cancelButton.onclick = function () {
    hideForm();
    document.getElementById('author-input').value = '';
    document.getElementById('title-input').value = '';
    document.getElementById('pages-input').value = '';
    document.getElementById('publishDate-input').value = '';
    document.getElementById('haveRead-input').selectedIndex = 0;
};

function updateLibraryDisplay() {
    gridContainer.innerHTML = '';
    for (let i = 0; i < grandLibrary.length; i++) {
        const book = grandLibrary[i];
        const card = document.createElement('div');
        card.classList.add('library-card');
        card.dataset.index = i;

        const title = document.createElement('h1');
        title.textContent = book.title;

        const author = document.createElement('h3');
        author.textContent = book.author;

        const pages = document.createElement('p');
        pages.textContent = `${book.pages} pages`;

        const publishDate = document.createElement('p');
        publishDate.textContent = `Published in ${book.publishDate}`;

        const haveRead = document.createElement('p');
        haveRead.textContent = book.haveRead ? 'Read' : 'Not read';

        const toggleReadBtn = document.createElement('button');
        toggleReadBtn.classList.add('switch');
        toggleReadBtn.textContent = 'Toggle Read';
        toggleReadBtn.addEventListener('click', () => {
        const index = card.dataset.index;
        toggleHaveRead(index);
    });

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove');
        removeBtn.textContent = 'Remove?';
        removeBtn.addEventListener('click', () => {
            const index = card.dataset.index;
            grandLibrary.splice(index,1);
            updateLibraryDisplay();
        })


        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(publishDate);
        card.appendChild(haveRead);
        card.appendChild(removeBtn);
        card.appendChild(toggleReadBtn);

        gridContainer.appendChild(card);
    }
}

function addBookToLibrary(book) {
    if(grandLibrary.some(b=>b.author === book.author && b.title === book.title)){
        alert('Book already exists in library!');
        return;
    }
    grandLibrary.push(book);
    updateLibraryDisplay();
    hideForm();
}

updateLibraryDisplay()
