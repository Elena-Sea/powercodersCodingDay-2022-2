const books = [
    {
    title: 'Harry Potter',
    author: 'Joanne Rowling',
    price: 30,
    inStock: 5,
    },
    {
    title: 'Design of EveryDay Things',
    author: 'Don Norman',
    price: 50,
    inStock: 10,
    },
    {
    title: 'Most Human Human',
    author: 'Brian Christian',
    price: 40,
    inStock: 12,
    },
];

const bookList = document.querySelector('.books');
const bookSortBtn = document.querySelector('.sort-btn');

function markupBooklist(books) { 
	bookList.innerHTML = "";
    bookList.insertAdjacentHTML('beforeend', books.map(book => { 
        return `<li class="book-card">
                        <div class="book">
                            <h3 class="book__name">The title of the book: <span class="book__italic">${book.title.toUpperCase()}</span></h3>
                            <p class="book__author">Written by: <span class="book__italic">${book.author}</span></p>
							<p class="book__price">The price is: <span class="book__italic">${book.price} CHF</span></p>
                            <p class="book__inStock"><span class="book__italic">${book.inStock} books</span> are left in Stock</p>
                        </div>
                </li>`
    }).join('')
    );
}

markupBooklist(books);


function sortBooksOnclick() { 
    
    console.log(...books);
    const sortedBooks = [...books].sort((a, b) => a.price - b.price);
    console.log(sortedBooks);
       

markupBooklist(sortedBooks);
    // books.sort();
}


bookSortBtn.addEventListener('click', sortBooksOnclick);