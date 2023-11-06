import { useLoaderData } from "react-router-dom";
import BooksCard from "./BooksCard";

const Books = () => {
  const books = useLoaderData();
  console.log(books);
  //
  //   console.log();
  return (
    <div className="bg-[#F6F3ED] min-h-screen">
      <div className="max-w-screen-xl mx-auto pt-10">
        <h2 className="text-5xl font-bold border-l-8 border-[#FBB04B] text-[#1A2D62] ml-6 lg:ml-0 pl-4 mb-10">{books[0].category} books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-7 lg:px-0">
          {books.map((book) => (
            <BooksCard key={book._id} book={book}></BooksCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
