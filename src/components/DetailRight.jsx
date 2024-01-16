import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DetailRight = () => {
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendedBooks = async () => {
      const apiKey = "AIzaSyBPObuwqcjiiU0h3s7F5zaLySOZv4xY6Qo"; // Replace with your API key
      const query = "all the light";

      const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=books&projection=full&key=${apiKey}`;

      try {
        const response = await axios.get(url);
        const data = response.data.items || [];
        setRecommendedBooks(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchRecommendedBooks();
  }, []);

  return (
    <div className="recommendedBooks__card flex flex-col flex-wraps">
      {loading ? (
        <div className="loader"></div>
      ) : (
        recommendedBooks.map((book, index) => (
          <li key={index}>
            <Link to={`/home/${book?.id}`}>
              <div className="recomended__card flex items-center gap-x-[23px] bg-white gap-5">
                {book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.thumbnail ? (
                  <img
                    className="recomended__card__img"
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                  />
                ) : (
                  <div className="no-image">No Image</div>
                )}
                <span className="">
                  <h3 className="recomended__card__text max-w-[304px] w-full font-normal text-[25px] leading-[35px] text-black">
                    {book.volumeInfo.title}
                  </h3>
                  <p className="recomended__card__authors max-w-[134px] w-full text-[#00000085] font-normal text-[16px] leading-[19px] pt-[18px] pb-[18px]">
                    {book.volumeInfo.authors}
                  </p>
                  <p className="recomended__card__lorem max-w-[305px] w-full text-[#00000059] font-normal text-[16px] leading-[25px] tracking-[0.3%] pt-[13px]">
                    {book.volumeInfo.description.slice(0, 80)}
                  </p>
                </span>
              </div>
            </Link>
          </li>
        ))
      )}
    </div>
  );
};

export default DetailRight;
