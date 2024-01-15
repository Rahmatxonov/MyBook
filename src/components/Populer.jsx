import "../sass/populer.scss";
import { useState, useEffect } from "react";
import axios from "axios";
const Populer = () => {
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendedBooks = async () => {
      const apiKey = "AIzaSyCwVnuZXE2-GI7bfNtWIzfwZFApI-gvUqc";
      const query = "Popular";

      const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=books&projection=full&key=${apiKey}`;

      try {
        const response = await axios.get(url);
        const data = response.data.items || [];
        setRecommendedBooks(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchRecommendedBooks();
  }, []);

  return (
    <div>
      <h1>Populer</h1>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <ul>
          {recommendedBooks.map((book, index) => (
            <li key={index}>
              <img
                className="recomended__card__img"
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={`${book.volumeInfo.title}`}
              />
              <p>{book.volumeInfo.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Populer;
