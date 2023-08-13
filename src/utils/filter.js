export const filterByGenre = (data, genre) => {
  return data.filter((ele) => ele.genre.includes(genre));
};

export const filterByYear = (data, year) => {
  return data.filter((ele) => ele.year == year);
};

export const filterByRating = (data, rating) =>
  data.filter((ele) => ele.rating == rating);

export const filterBySearch = (data, searchQuery) => {
  return data.filter(({ title }) =>
    title.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

export const findItemById = (data, id) => data.find((ele) => ele.id == id);
