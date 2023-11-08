import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

import BorrowedBooksCard from "./BorrowedBooksCard";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [borrowBooks, setBorrowBooks] = useState([]);
  const url = `https://library-management-server-ashen.vercel.app/borrows?email=${user.email}`;
  useEffect(() => {
    axios.get(url).then((res) => setBorrowBooks(res.data));
  }, [url]);
  console.log(borrowBooks);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    setCarts(borrowBooks);
  }, [borrowBooks]);

  return (
    <div className="bg-[#F6F9FF] min-h-screen">
      <div className="max-w-screen-xl mx-auto pt-10">
        <h2 className="text-5xl font-bold border-l-8 border-[#FBB04B] text-[#1A2D62] ml-6 lg:ml-0 pl-4 mb-10">Your borrowed books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-7 px-3 lg:px-0 pb-10">
          {carts.map((book) => (
            <BorrowedBooksCard key={book._id} book={book} carts={carts} setCarts={setCarts}></BorrowedBooksCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BorrowedBooks;
