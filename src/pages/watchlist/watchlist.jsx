import { MovieCard } from "../../components";
import { useMovies } from "../../context/movies-context";

export const WatchlistPage = () => {
  const { watchlist } = useMovies();

  return (
    <div>
      <div>
        {watchlist.map((ele) => (
          <MovieCard {...ele} key={ele.id} />
        ))}
      </div>
    </div>
  );
};
