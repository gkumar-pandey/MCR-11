import { Link } from "react-router-dom";
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
          <Link to={`/movie/${ele.id}`} key={ele.id}>
            <MovieCard {...ele} />
          </Link>
        ))}
      </div>
    </div>
  );
};
