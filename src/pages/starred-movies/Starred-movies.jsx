import { useEffect } from "react";
import { Container, MovieCard } from "../../components";
import { useMovies } from "../../context/movies-context";

export const StarredMoviesPage = () => {
  const { starredMovies, setStarredMovies } = useMovies();

  useEffect(() => {
    if (localStorage.getItem("starredMovies")) {
      setStarredMovies(JSON.parse(localStorage.getItem("starredMovies")));
    }
  }, []);

  return (
    <div>
      <Container>
        {starredMovies.length == 0 ? (
          <div className=" text-center text-xl font-semibold  ">
            <h2>You have not starred a movie</h2>
          </div>
        ) : (
          <div className="flex flex-wrap flex-row ">
            {starredMovies.map((ele) => (
              <MovieCard {...ele} key={ele.id} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};
