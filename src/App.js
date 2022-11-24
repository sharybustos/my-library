import './App.css';
import Login from './components/auth/login';
import BooksHome from './components/books/books-home';
import Book from './components/books/book';
import BookEdit from './components/books/book-edit';
import BookNew from './components/books/book-new';
import Contenedor from './components/contenedor';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/books" element={<BooksHome />} />
          <Route path="/books/:id" element={<Book />} />
          <Route path="/books/:id/edit" element={<BookEdit />} />
          <Route path="/books/new" element={<BookNew />} />
          <Route path="/contenedor" element={<Contenedor />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
