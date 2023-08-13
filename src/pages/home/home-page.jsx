import { Filter, MovieCard } from "../../components";
import { useMovies } from "../../context/movies-context";

export const HomePage = () => {
  const { data } = useMovies();
  return (
    <div>
      <div>
        <Filter />
      </div>
      <div className=" flex flex-wrap  ">
        {data?.map((ele) => (
          <MovieCard key={ele.id} {...ele} />
        ))}
      </div>
    </div>
  );
};
