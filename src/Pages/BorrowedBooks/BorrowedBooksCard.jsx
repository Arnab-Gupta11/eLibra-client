import axios from "axios";
import PropTypes from "prop-types";
import { MdDateRange } from "react-icons/md";
import Swal from "sweetalert2";
const BorrowedBooksCard = ({ book, carts, setCarts }) => {
  const { _id, image, name, currentDay, borrowDate, category, quantity, book_id } = book;
  const handleDelete = (_id) => {
    const updateBook = { quantity: quantity + 1 };
    console.log(updateBook);
    axios.patch(`https://library-management-server-ashen.vercel.app/books/${book_id}`, updateBook).then((res) => {
      console.log(res.data);
      //   if (res.data.modifiedCount > 0) {
      //     Swal.fire({
      //       title: "Success!",
      //       text: "Book Borrowed successfully",
      //       icon: "success",
      //       confirmButtonText: "Cool",
      //     });
      //   }
      //   navigate(`/${category}`);
    });
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://library-management-server-ashen.vercel.app/borrows/${_id}`).then((res) => {
          console.log(res.data);
          if (res?.data?.deletedCount > 0) {
            Swal.fire("Deleted!", "Your Book has been returned.", "success");
            const remainig = carts.filter((borrow) => borrow._id !== _id);
            setCarts(remainig);
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div className="relative h-96 mx-4 -mt-5 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img src={image} alt="img-blur-shadow" className="h-full w-full" />
          <div className="absolute bottom-0 left-0 ">
            <p className="bg-[#20ce7a] px-4 py-2 rounded-lg text-white font-semibold shadow-lg">{category}</p>
          </div>
        </div>
        <div className="">
          <div className="p-6">
            <h2 className="font-bold text-[#1A2D62] text-lg">{name}</h2>
            <div className="flex gap-1 items-center">
              <MdDateRange className="text-green-700"></MdDateRange>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">Borrowed date : {currentDay}</p>
            </div>
            <div className="flex gap-1 items-center">
              <MdDateRange className="text-green-700"></MdDateRange>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">Return date : {borrowDate}</p>
            </div>
          </div>
          <div className="p-6 pt-0">
            <button
              className="rounded-md hover:bg-[#2ECA7F] normal-case hover:text-white px-7 text-base font-semibold py-2 bg-white border-2 border-[#2ECA7F] text-[#2ECA7F] "
              onClick={() => handleDelete(_id)}
            >
              Retern
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
BorrowedBooksCard.propTypes = {
  book: PropTypes.object,
  carts: PropTypes.array,
  setCarts: PropTypes.func,
};
export default BorrowedBooksCard;
