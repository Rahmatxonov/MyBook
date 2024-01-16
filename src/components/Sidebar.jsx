import PropTypes from "prop-types";
const Sidebar = ({ genres, recommendations }) => {
  const renderGenres = () => {
    const genreItems = [];

    if (genres && genres.length > 0) {
      genreItems.push(
        <li
          key="genres"
          className="sidebar__section-title text-xl font-bold mb-4"
        >
          Book by Genre
        </li>
      );

      genres.forEach((genre, index) => {
        genreItems.push(
          <li key={index} className="sidebar__item text-gray-700 mb-2">
            {genre}
          </li>
        );
      });
    }

    return genreItems;
  };

  const renderRecommendations = () => {
    const recommendationItems = [];

    if (recommendations && recommendations.length > 0) {
      recommendationItems.push(
        <li
          key="recommendations"
          className="sidebar__section-title text-xl font-bold mb-4"
        >
          Recommendations
        </li>
      );

      recommendations.forEach((recommendation, index) => {
        recommendationItems.push(
          <li key={index} className="sidebar__item text-gray-700 mb-2">
            {recommendation}
          </li>
        );
      });
    }

    return recommendationItems;
  };

  return (
    <main className="bg-[rgba(220,220,220,0.36)] w-[33%]">
      <div className="sidebar pt-[90px] ml-24 pr-14">
        <ul className="sidebar__list">
          {renderGenres()}
          <hr />
          {renderRecommendations()}
        </ul>
      </div>
    </main>
  );
};

Sidebar.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  recommendations: PropTypes.arrayOf(PropTypes.string),
};

export default Sidebar;
