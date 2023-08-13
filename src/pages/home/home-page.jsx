import { Container, Filter, MovieCard } from "../../components";
import { useMovies } from "../../context/movies-context";

export const HomePage = () => {
  const { data } = useMovies();
  return (
    <div>
      <Container>
        <div className="p-4 ">
          <Filter />
        </div>
        <div className=" flex flex-wrap  ">
          {data?.map((ele) => (
            <div key={ele.id}>
              <MovieCard {...ele} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
