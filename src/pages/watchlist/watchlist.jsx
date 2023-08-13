import { Container } from "../../components";
import { MovieCard } from "../../components";
import { useMovies } from "../../context/movies-context";

export const WatchlistPage = () => {
  const { watchlist } = useMovies();

  return (
    <div>
      <Container>
        {watchlist.length === 0 ? (
          <div className=" text-center text-xl font-semibold  ">
            <h2>Watch list is Empty</h2>
          </div>
        ) : (
          <div className="flex justify-center flex-row flex-wrap ">
            {watchlist.map((ele) => (
              <MovieCard {...ele} key={ele.id} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};
