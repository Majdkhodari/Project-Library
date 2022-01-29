import books from '../Data/booksData'
import {makeAutoObservable} from 'mobx';

class BooksStore {
    books = books;
    constructor() {
      makeAutoObservable(this);
    }
  
    addBook(book) {
      book.id = this.books[this.books.length - 1].id + 1;
      book.slug =book.title.toLowerCase().replace(" ","-");
    //   book.available = "";
      this.books.push(book);
    }
  }
  
  const booksStore = new BooksStore();
  export default booksStore; 