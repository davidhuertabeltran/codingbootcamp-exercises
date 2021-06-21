import './App.css';
import {books} from './books.js';
import Book from './components/Book';

function App() {
  return (
    <>
      {books.map((book, index) => 
        <Book 
        key={index}
        isbn={book.isbn}
        title={book.title}
        subtitle={book.subtitle}
        author={book.author}
        published={book.published}
        publisher={book.publisher}
        pages={book.pages}
        description={book.description}
        website={book.website}
        />
      )}
      
    </>
  );
}

export default App;
