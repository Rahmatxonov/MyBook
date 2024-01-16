import { Link } from "react-router-dom";
import "../sass/notFound.scss";
const NotFound = () => {
  return (
    <div className="container-not">
      <div className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Page Not Found</p>
        <Link to="/" className="not-found__link">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
