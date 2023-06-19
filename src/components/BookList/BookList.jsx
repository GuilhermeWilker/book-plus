import "./style.css";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { BookDataContext } from "../../context/BookContexts/BookDataContext";

export const BookList = () => {
  const { books } = useContext(BookDataContext);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <div className="book-list">
      <h3>Sua lista de livros</h3>

      <table>
        <thead>
          <tr>
            <th>Nº</th>
            <th>TÍTULO</th>
            <th>CATEGORIA</th>
            <th className="description">DESCRIÇÃO</th>
            <th>DETALHE</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td className="title">{book.title}</td>
              <td>{book.category}</td>
              <td className="description">{book.description}</td>
              <td>
                &nbsp;
                <Link to={`/book/${book.id}`} className="nav-link-item">
                  Ver mais
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
