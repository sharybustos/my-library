import './App.css';
import Login from './components/auth/login';
import BooksHome from './components/books/books-home';
import Book from './components/books/book';
import BookEdit from './components/books/book-edit';
import BookNew from './components/books/book-new';
import Register from './components/auth/register';
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from './components/navbar';
import { useState } from 'react';
import Guard from './components/auth/guard';
import { useEffect } from 'react';

function App() {
  const [user, setUser] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (localStorage.getItem('user_id')) {
      setUser(true)
    } else {
      setUser(false)
    }
  }, [location])

  return (

    <div className="App">
      <Navbar userProps={user} />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/books"
          element={
            <Guard isAllowed={user}>
              <BooksHome />
            </Guard>} />
        <Route
          path="/books/:id"
          element={
            <Guard isAllowed={user}>
              <Book />
            </Guard>} />
        <Route
          path="/books/:id/edit"
          element={
            <Guard isAllowed={user}>
              <BookEdit />
            </Guard>} />
        <Route
          path="/books/new"
          element={
            <Guard isAllowed={user}>
              <BookNew />
            </Guard>} />
      </Routes>
    </div>
  )
}

export default App;
