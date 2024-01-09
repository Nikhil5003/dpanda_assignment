import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDetails } from "../../Redux/actions";
import { connect } from "react-redux";
import LoadingSpinner from "../../Components/Loader";
import "./details.css"; // Import the CSS file

function Details({ fetchDetails, characterName, movies, loading = false }) {
  const { index } = useParams();
  useEffect(() => {
    fetchDetails(index);
  }, [index]);

  return (
    <div className="details-container">
      {loading && <LoadingSpinner />}
      {!loading && (
        <div>
          <h1 className="character-name">Character name is {characterName}</h1>
          <hr />
          <div className="movies-container">
            <h1>Movies in which the character appears:</h1>
            {movies.map((movie, index) => (
              <div key={index} className="movie-card">
                <h2>
                  {index + 1}. {movie}
                </h2>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = ({
  detailsReducer: {
    details: { characterName = "", movies = [] } = {},
    loading,
  } = {},
} = {}) => ({
  characterName,
  movies,
  loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetails: (index) => dispatch(fetchDetails(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
