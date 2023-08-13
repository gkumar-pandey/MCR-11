/* eslint-disable react/prop-types */
import { useState } from "react";
import { useMovies } from "../../context/movies-context";

const Input = ({ name, type, value, onchange, label }) => (
  <label className=" text-xl text-gray-800 flex flex-col ">
    {label}:
    <input
      type={type}
      className=" border focus:outline-none border-gray-800 rounded py-1 px-2 "
      name={name}
      value={value}
      onChange={onchange}
      placeholder={name}
    />
  </label>
);

export const AddMovieForm = () => {
  const { addNewMovie } = useMovies();
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    year: "",
    cast: "",
    rating: "",
    director: "",
    writer: "",
    imageURL: ""
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((pre) => ({ ...pre, [name]: value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNewMovie(formData);
    setFormData({
      title: "",
      summary: "",
      year: "",
      cast: "",
      rating: "",
      director: "",
      writer: "",
      imageURL: ""
    });
  };
  return (
    <div>
      <div>
        <form onSubmit={onSubmitHandler}>
          <Input
            label={"Title"}
            type={"text"}
            name="title"
            value={formData.title}
            onchange={onChangeHandler}
          />
          <Input
            type={"text"}
            label={"Summary"}
            name={"summary"}
            value={formData.summary}
            onchange={onChangeHandler}
          />
          <Input
            type={"number"}
            name={"year"}
            label={"Year"}
            onchange={onChangeHandler}
            value={formData.year}
          />
          <Input
            type={"number"}
            name={"rating"}
            label={"Rating"}
            onchange={onChangeHandler}
            value={formData.rating}
          />
          <Input
            type={"text"}
            name={"director"}
            label={"Director"}
            onchange={onChangeHandler}
            value={formData.director}
          />
          <Input
            type={"text"}
            label={"Cast"}
            onchange={onChangeHandler}
            name={"cast"}
            value={formData.cast}
          />
          <Input
            type={"text"}
            name={"writer"}
            label={"Writer"}
            onchange={onChangeHandler}
            value={formData.writer}
          />
          <Input
            type={"text"}
            name={"imageURL"}
            label={"imageURL"}
            value={formData.imageURL}
            onchange={onChangeHandler}
          />
          <button
            className="px-3 py-1 bg-gray-900 text-white rounded my-2 "
            type="submit"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};
