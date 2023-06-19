import "../assets/css/app.css";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";

const BookDetails = () => {
  const { id } = useParams();

  const [book, setBook] = useState(null);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books"));

    const foundBook = storedBooks.find(
      (storedBook) => storedBook.id === Number(id)
    );
    setBook(foundBook);
  }, [id]);

  if (!book) {
    return <div>Livro não encontrado!</div>;
  }

  const handleDelete = () => {
    const storedBooks = JSON.parse(localStorage.getItem("books"));

    const updatedBooks = storedBooks.filter(
      (storedBook) => storedBook.id !== Number(id)
    );

    localStorage.setItem("books", JSON.stringify(updatedBooks));

    window.location.href = "/";
  };

  return (
    <main>
      <Header />

      <section className="book-info-container">
        <div className="book-info-img">
          <img src="" alt="" srcSet="" />
        </div>

        <table>
          <thead>
            <tr>
              <th>AUTOR</th>
              <th>TÍTULO</th>
              <th>CATEGORIA</th>
              <th>ANO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{book.author}</td>
              <td>{book.title}</td>
              <td>{book.category}</td>
              <td>{book.year}</td>
            </tr>
          </tbody>
        </table>

        <div className="book-info-title">
          <h2>Resumo da Obra</h2>
        </div>

        <div className="book-info-description">
          <p>{book.description}</p>

          <div className="inline-group">
            <button onClick={handleDelete} className="delete-button">
              Excluir Livro
            </button>

            <Link to={"/"} className="nav-link">
              Voltar a página inicial
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookDetails;
