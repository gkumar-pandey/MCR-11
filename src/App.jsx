import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages";
import { Navbar } from "./components";
import { WatchlistPage } from "./pages/watchlist/watchlist";
import { StarredMoviesPage } from "./pages/starred-movies/Starred-movies";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
          <Route path="/starred-movies" element={<StarredMoviesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
