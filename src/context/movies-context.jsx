/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { moviesData } from "../staticdata";
import {
  filterByGenre,
  filterByRating,
  filterBySearch,
  filterByYear
} from "../utils";

const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState(moviesData);
  const [starredMovies, setStarredMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [filter, setFilter] = useState({
    genre: "",
    rating: "",
    year: "",
    search: ""
  });

  const watchlistBtnHandler = (id, isAddedToWatchlist) => {
    const movie = movies.find((ele) => ele.id == id);
    if (!isAddedToWatchlist) {
      setWatchlist((pre) => [...pre, movie]);
    } else {
      setWatchlist((pre) => pre.filter((ele) => ele.id != id));
    }
  };

  const starredBtnHandler = (id, isStarred) => {
    const movie = movies.find((ele) => ele.id == id);
    if (isStarred) {
      setStarredMovies((pre) => pre.filter((ele) => ele.id != id));
    } else {
      setStarredMovies((pre) => [movie, ...pre]);
    }
  };

  const filterMovies = () => {
    let filteredData = [...movies];
    const { genre, rating, year, search } = filter;

    if (genre) {
      filteredData = filterByGenre(filteredData, genre);
    }

    if (rating) {
      filteredData = filterByRating(filteredData, rating);
    }
    if (year) {
      filteredData = filterByYear(filteredData, year);
    }

    if (search) {
      filteredData = filterBySearch(filteredData, search);
    }
    return filteredData;
  };

  const addNewMovie = (movie) => {
    const updatedData = [{ id: movies.length + 1, ...movie }, ...movies];
    setMovies(() => [...updatedData]);
    localStorage.setItem("movies", JSON.stringify(updatedData));
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("movies"));
    if (data) {
      setMovies(data);
    }
  }, []);

  const data = filterMovies();

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        watchlistBtnHandler,
        setStarredMovies,
        starredBtnHandler,
        starredMovies,
        watchlist,
        data,
        setFilter,
        filter,
        addNewMovie
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);
