import { useLoaderData } from "react-router-dom";
import AllBooksCard from "./AllBooksCard";

const AllBooks = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div className="bg-[#F6F9FF] min-h-screen">
      <div className="max-w-screen-xl mx-auto pt-10">
        <h2 className="text-5xl font-bold border-l-8 border-[#FBB04B] text-[#1A2D62] pl-4 mb-10 ml-5 ">All books</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-7 lg:px-0">
          {books?.map((book) => (
            <AllBooksCard key={book._id} book={book}></AllBooksCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
