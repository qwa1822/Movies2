import axios from "../api/axios";
import React, { useEffect, useState } from "react";

import "./Row.css";
import MovieModal from "./MovieModal";
const Row = ({ title, id, fetchUrl }) => {
  const [movies, setmovies] = useState([]);

  const [modalOpen, setmodalOpen] = useState(false);

  const [movieSelected, setmovieSelected] = useState({});

  useEffect(() => {
    fetchMovieData(``);
  }, [fetchUrl]);

  const fetchMovieData = async () => {
    const response = await axios.get(fetchUrl);
    setmovies(response.data.results);
  };

  const handleClick = movie => {
    setmodalOpen(true);
    setmovieSelected(movie);
  };

  return (
    <div className="row_poster">
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}
          >
            {"<"}
          </span>
        </div>
        <div id={id} className="row__posters">
          {movies.map(movie => (
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              key={movie.id}
              alt={movie.name}
              className="row__poster"
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>

        <div className="slider__arrow-right">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}
          >
            {">"}
          </span>
        </div>
      </div>

      {modalOpen && (
        <MovieModal {...movieSelected} setmodalOpen={setmodalOpen} />
      )}
    </div>
  );
};

export default Row;
