import { Link } from "react-router-dom";
import { Search } from "../search/search";

export const Navbar = () => {
  const navlinks = [
    { name: "Movies", link: "/" },
    { name: "Watch List", link: "/watchlist" },
    { name: "Starred Movies", link: "starred-movies" }
  ];
  return (
    <div className="bg-slate-900 text-white p-3 ">
      <div className=" flex  flex-row items-center justify-between  ">
        <div className="text-2xl font-bold px-2 py-1 ">
          <h2>IMDB</h2>
        </div>
        <div>
          <Search />
        </div>
        <div className=" flex flex-row items-center justify-between gap-4 font-semibold ">
          {navlinks.map((ele, idx) => (
            <Link to={ele.link} key={idx}>
              {ele.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
