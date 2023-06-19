import { createContext, useState, useEffect } from "react";

export const BookDataContext = createContext();

// eslint-disable-next-line react/prop-types
export const BookDataProvider = ({ children }) => {
  const [books, setBooks] = useState(() => {
    const booksInStorage = localStorage.getItem("books");
    return booksInStorage ? JSON.parse(booksInStorage) : [];
  });

  const [nextID, setNextID] = useState(() => books.length);

  const addBookData = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  useEffect(() => {
    setNextID(books.length);
  }, [books]);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookDataContext.Provider value={{ books, addBookData, nextID }}>
      {children}
    </BookDataContext.Provider>
  );
};
