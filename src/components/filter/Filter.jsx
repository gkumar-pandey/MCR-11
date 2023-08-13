import { Link } from "react-router-dom";
import { useMovies } from "../../context/movies-context";
import styles from "./filter.module.css";

export const Filter = () => {
  const { filter, setFilter } = useMovies();
  const years = [
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
    2002, 2003, 2004
  ];

  const genre = [
    "Drama",
    "Crime",
    "Action",
    "Adventure",
    "Fantasy",
    "Romance",
    "Sci-Fi",
    "Biography"
  ];

  const rating = () => {
    let arr = [];

    for (let i = 1; i <= 10; i++) {
      arr.push(i);
    }

    return arr;
  };

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFilter((pre) => ({ ...pre, [name]: value }));
  };

  console.log(filter);

  return (
    <div>
      <div className=" flex flex-row items-center justify-between ">
        <h2 className="text-2xl font-bold  ">Movies</h2>
        <div>
          <select
            value={filter.genre}
            onChange={onChangeHandler}
            className={styles.select}
            name="genre"
          >
            <option value={""}>genre</option>
            {genre.map((ele, idx) => (
              <option value={ele} key={idx}>
                {ele}
              </option>
            ))}
          </select>
          <select
            name="year"
            onChange={onChangeHandler}
            value={filter.year}
            className={styles.select}
          >
            <option value={""}>Release Year</option>
            {years.map((ele, idx) => (
              <option value={ele} key={idx}>
                {ele}
              </option>
            ))}
          </select>
          <select
            onChange={onChangeHandler}
            name="rating"
            value={filter.rating}
            className={styles.select}
          >
            <option value={""}>Rating</option>
            {rating().map((ele, idx) => (
              <option value={ele} key={idx}>
                {ele}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Link to={"/add-movie"}>
            <button className=" py-1 px-3 text-lg font-medium bg-slate-900 text-white rounded ">
              Add a Movie
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
