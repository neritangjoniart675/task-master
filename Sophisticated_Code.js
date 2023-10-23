// File Name: Sophisticated_Code.js
// Content: A complex implementation of a book management system using JavaScript

// Class for Book
class Book {
  constructor(title, author, publicationDate, genre) {
    this.title = title;
    this.author = author;
    this.publicationDate = publicationDate;
    this.genre = genre;
  }
}

// Class for Bookshelf
class Bookshelf {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    const index = this.books.findIndex(
      (b) =>
        b.title === book.title &&
        b.author === book.author &&
        b.publicationDate === book.publicationDate &&
        b.genre === book.genre
    );

    if (index > -1) {
      this.books.splice(index, 1);
    }
  }

  getTotalBooks() {
    return this.books.length;
  }

  findBooksByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  }

  findBooksByGenre(genre) {
    return this.books.filter((book) => book.genre === genre);
  }

  getOldestBook() {
    return this.books.reduce((oldestBook, currentBook) => {
      return oldestBook.publicationDate < currentBook.publicationDate
        ? oldestBook
        : currentBook;
    });
  }

  getNewestBook() {
    return this.books.reduce((newestBook, currentBook) => {
      return newestBook.publicationDate > currentBook.publicationDate
        ? newestBook
        : currentBook;
    });
  }
}

// Create Bookshelf instances
const bookshelf1 = new Bookshelf("Fiction Bookshelf");
const bookshelf2 = new Bookshelf("Non-Fiction Bookshelf");

// Create Book instances
const book1 = new Book("Book 1", "Author 1", 2000, "Fiction");
const book2 = new Book("Book 2", "Author 2", 1995, "Fiction");
const book3 = new Book("Book 3", "Author 1", 2021, "Non-Fiction");
const book4 = new Book("Book 4", "Author 3", 1990, "Non-Fiction");

// Add books to bookshelves
bookshelf1.addBook(book1);
bookshelf1.addBook(book2);
bookshelf2.addBook(book3);
bookshelf2.addBook(book4);

// Test the Bookshelf methods
console.log("Total Books in Fiction Bookshelf:", bookshelf1.getTotalBooks());
console.log(
  "Books by Author 1:",
  bookshelf1.findBooksByAuthor("Author 1").map((book) => book.title)
);
console.log(
  "Books by Genre 'Non-Fiction':",
  bookshelf2.findBooksByGenre("Non-Fiction").map((book) => book.title)
);
console.log("Oldest Book:", bookshelf1.getOldestBook().title);
console.log("Newest Book:", bookshelf2.getNewestBook().title);

// Test removeBook method
bookshelf1.removeBook(book1);
console.log(
  "Total Books in Fiction Bookshelf after removing Book 1:",
  bookshelf1.getTotalBooks()
);