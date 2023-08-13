/* eslint-disable no-unused-vars */

import { useMovies } from "../../context/movies-context";

/* eslint-disable react/prop-types */
export const MovieCard = ({
  imageURL,
  id,
  title,
  year,
  genre,
  rating,
  summary
}) => {
  const { watchlistBtnHandler, starredBtnHandler, starredMovies, watchlist } =
    useMovies();

  const isAvailabeInWatchlist = watchlist.find((ele) => ele.id === id);
  const isStarred = starredMovies.find((ele) => ele.id == id);

  return (
    <div className="w-80 rounded m-3 border shadow-md p-1  ">
      <div className=" flex flex-col justify-between  ">
        <>
          <img className="w-full object-cover h-[25rem]" src={imageURL} />
        </>
        <div className=" flex flex-col justify-between   ">
          <h2 className=" text-lg font-bold py-2 ">{title}</h2>
          <p className=" line-clamp-3 ">{summary}</p>
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
  );
};
