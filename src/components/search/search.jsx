import { useMovies } from "../../context/movies-context";

export const Search = () => {
  const { filter, setFilter } = useMovies();
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilter((pre) => ({ ...pre, [name]: value }));
  };

  return (
    <>
      <input
        name="search"
        value={filter.search}
        onChange={onChangeHandler}
        type="text"
        className=" py-1 px-2 text-lg text-black rounded focus:outline-none "
        placeholder="Search movies.."
      />
    </>
  );
};
