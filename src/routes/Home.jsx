import "../assets/css/app.css";

import { FormBook } from "../components/BookForm/Form";
import { BookList } from "../components/BookList/BookList";
import { Recommentations } from "../components/Recommendations/Recommendations";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <img src="/logo.png" alt="Book Plus, marca da empresa" />

        <h4>
          Uma galeria online para armazenar seus livros e HQs favoritos(a),
          oferecendo a você a possibilidade de redescobrir, ler resumos e
          revisitar as obras literárias que já conquistaram seu coração!
        </h4>
      </section>

      <FormBook />
      <BookList />
      <Recommentations />
    </main>
  );
};

export default Home;
