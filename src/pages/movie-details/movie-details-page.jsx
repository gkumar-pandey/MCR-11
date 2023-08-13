import { useParams } from "react-router-dom";
import { useMovies } from "../../context/movies-context";
import { findItemById } from "../../utils";

export const MovieDetailsPage = () => {
  const {
    movies,
    watchlist,
    starredBtnHandler,
    starredMovies,
    watchlistBtnHandler
  } = useMovies();
  const { id } = useParams();
  const { imageURL, title, summary, writer, cast, year, genre, director } =
    findItemById(movies, id);
  const isAvailabeInWatchlist = watchlist.find((ele) => ele?.id == id);
  const isStarred = starredMovies.find((ele) => ele?.id == id);

  return (
    <div className=" bg-slate-100 min-h-screen flex items-center justify-center ">
      <div className=" flex items-center justify-center w-3/4 border rounded-md bg-white p-4 ">
        <div className=" grid grid-cols-2 ">
          <div>
            <img className=" w-3/4 rounded-md " src={imageURL} />
          </div>
          <div className=" text-lg">
            <h2 className="text-3xl my-2 font-bold ">{title}</h2>
            <p>{summary}</p>
            <p>Year : {year}</p>
            <p>Director : {director}</p>
            <p>Writer : {writer}</p>
            <p>Cast : {cast}</p>
            <p>Genre : {genre}</p>
            <div>
              <div className=" flex items-center justify-between py-2 ">
                <button
                  onClick={() => starredBtnHandler(id, isStarred)}
                  className="font-semibold text-lg bg-gray-900 py-1 px-4 rounded text-white "
                >
                  {isStarred ? "Unstar" : "Star"}
                </button>
                <button
                  onClick={() => watchlistBtnHandler(id, isAvailabeInWatchlist)}
                  className="font-semibold text-lg bg-gray-900 py-1 px-4 rounded text-white "
                >
                  {isAvailabeInWatchlist
                    ? "Remove from watchlist"
                    : "Add to watchlist"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
