import "./style.css";
import { useState, useContext } from "react";
import { BookDataContext } from "../../context/BookContexts/BookDataContext";

export const FormBook = () => {
  const { addBookData, nextID } = useContext(BookDataContext);
  const [bookFormData, setBookFormData] = useState({
    title: "",
    category: "",
    year: "",
    author: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: nextID,
      title: bookFormData.title,
      category: bookFormData.category,

      year: bookFormData.year,
      author: bookFormData.author,
      description: bookFormData.description,
    };

    addBookData(newBook);

    setBookFormData({
      title: "",
      category: "",
      year: "",
      author: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <legend className="form-legend">Cadastre seu livro aqui!</legend>

        <div className="form-group">
          <input
            value={bookFormData.title}
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Título do livro"
          />
        </div>

        <div className="form-group">
          <select
            value={bookFormData.category}
            onChange={handleChange}
            name="category"
          >
            <option value="">Categoria</option>
            <option value="Drama">Drama</option>
            <option value="Romance">Romance</option>
            <option value="Aventura">Aventura</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Suspense">Suspense</option>
            <option value="Terror">Terror</option>
          </select>

          <input
            type="text"
            name="author"
            placeholder="Autor"
            value={bookFormData.author}
            onChange={handleChange}
          />

          <input
            type="text"
            name="year"
            placeholder="Ano"
            pattern="^[0-9]+$"
            title="Digite apenas números"
            value={bookFormData.year}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="description"
            placeholder="Descrição ou Resumo do livro"
            value={bookFormData.description}
            onChange={handleChange}
          />

          <input type="submit" value="Cadastrar" className="button-submit" />
        </div>
      </form>
    </>
  );
};
