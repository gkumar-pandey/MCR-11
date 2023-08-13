import { Container, MovieCard } from "../../components";
import { useMovies } from "../../context/movies-context";

export const StarredMoviesPage = () => {
  const { starredMovies } = useMovies();

  return (
    <div>
      <Container>
        <div className="">
          {starredMovies.map((ele) => (
            <MovieCard {...ele} key={ele.id} />
          ))}
        </div>
      </Container>
    </div>
  );
};
