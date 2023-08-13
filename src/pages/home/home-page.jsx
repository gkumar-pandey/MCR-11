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
        <>
          {data.length == 0 ? (
            <div className=" text-center font-semibold text-xl  ">
              <h2>Movies Not Found</h2>
            </div>
          ) : (
            <>
              <div className=" flex flex-wrap border justify-center  ">
                {data?.map((ele) => (
                  <div key={ele.id}>
                    <MovieCard {...ele} />
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      </Container>
    </div>
  );
};
