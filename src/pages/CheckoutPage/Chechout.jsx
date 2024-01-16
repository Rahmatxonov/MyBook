import { useState, useEffect } from "react";
import axios from "axios";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import "../../sass/detail.scss";
const Checkout = () => {
  const { id } = useParams();
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      const url = `https://www.googleapis.com/books/v1/volumes/${id}`;
      try {
        const response = await axios.get(url);
        const data = response.data || {};
        setRecommendedBooks(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  return (
    <>
      <div className="detail">
        <div className="container">
          <Link to="/">
            <IoMdArrowBack className="back w-[60px] h-[60px] text-white" />
          </Link>
          {loading ? (
            <div className="loader"></div>
          ) : (
            <div className="max-w-[629px] w-full bg-white">
              <h2>{recommendedBooks.volumeInfo.title}</h2>
              <p>{recommendedBooks.volumeInfo.description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Checkout;
