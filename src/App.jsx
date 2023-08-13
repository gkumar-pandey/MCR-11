import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage, MovieDetailsPage } from "./pages";
import { Navbar } from "./components";
import { WatchlistPage } from "./pages/watchlist/watchlist";
import { StarredMoviesPage } from "./pages/starred-movies/Starred-movies";
import { AddNewMoviePage } from "./pages/add-movie/add-movie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="add-movie" element={<AddNewMoviePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
          <Route path="/starred-movies" element={<StarredMoviesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
