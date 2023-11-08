import { useLoaderData } from "react-router-dom";
import AllBooksCard from "./AllBooksCard";
import { useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
const AllBooks = () => {
  const [data, setData] = useState([]);
  const books = useLoaderData();
  useEffect(() => {
    setData(books);
  }, [books]);
  const filterBook = books.filter((book) => book.quantity !== 0);
  const handleFilter = () => {
    setData(filterBook);
  };
  return (
    <div className="bg-[#F6F9FF] min-h-screen">
      <div className="max-w-screen-xl mx-auto pt-10">
        <div className="flex justify-between mb-8 items-center">
          <div>
            <h2 className="text-5xl font-bold border-l-8 border-[#FBB04B] text-[#1A2D62] pl-4 mb-10 ml-5 ">All books</h2>
          </div>
          <div>
            <button
              className="flex gap-3 items-center rounded-md hover:bg-[#2ECA7F] normal-case hover:text-white px-5 text-base font-semibold h-2/3  bg-white border-2 border-[#2ECA7F] text-[#2ECA7F] "
              onClick={handleFilter}
            >
              <FiFilter className="inline"></FiFilter> Filter
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-7 lg:px-0 pb-10">
          {data?.map((book) => (
            <AllBooksCard key={book._id} book={book}></AllBooksCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
