import { AddMovieForm, Container } from "../../components";

export const AddNewMoviePage = () => {
  return (
    <div>
      <Container>
        <div>
          <h1 className="py-2 text-3xl font-bold ">Add New Movie</h1>
        </div>
        <div>
          <AddMovieForm />
        </div>
      </Container>
    </div>
  );
};
