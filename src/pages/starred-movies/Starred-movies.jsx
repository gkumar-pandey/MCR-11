import { MovieCard } from "../../components";
import { useMovies } from "../../context/movies-context";

export const StarredMoviesPage = () => {
  const { starredMovies } = useMovies();

  return (
    <div>
      {starredMovies.map((ele) => (
        <MovieCard {...ele} key={ele.id} />
      ))}
    </div>
  );
};
