/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const Modal = ({ borrow, user, loadedData }) => {
  const { _id, name, image, rating, authore_name, quantity, short_description, category } = loadedData;
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  const handleBorrow = (e) => {
    e.preventDefault();
    const form = e.target;
    // const userName = form.name.value;
    const email = form.email.value;
    const borrowDate = form.date.value;
    // console.log(name, email, date);
    const currentDate = new Date();
    const currentDay = currentDate.toISOString().split("T")[0];
    // console.log(currentDay);
    // console.log(quantity)

    // console.log(borrowBook);
    const updateBook = { name, image, rating, authore_name, quantity: quantity - 1, short_description, category };
    axios.put(`https://library-management-server-ashen.vercel.app/books/${_id}`, updateBook).then((res) => {
      console.log(res.data);
    });

    const borrowBook = { image, name, category, borrowDate, currentDay, email, quantity: quantity - 1, book_id: _id };
    axios.post("https://library-management-server-ashen.vercel.app/borrows", borrowBook).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Book Borrowed successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
      navigate(`/${category}`);
    });
  };
  return (
    <div>
      <dialog id={borrow} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-[#E6F7F6]">
          <div className="modal-action">
            <form method="dialog">
              <button className="btn rounded-full bg-gray-600 text-white font-bold text-lg">X</button>
            </form>
          </div>
          <h3 className="font-bold text-3xl text-center text-[#1A2D62]">Please fill the Info</h3>
          <form onSubmit={handleBorrow}>
            <div className="flex flex-col w-2/3 mx-auto mt-6">
              <label className="text-[#1A2D62] font-semibold" htmlFor="">
                Your Name
              </label>
              <input
                placeholder="Enter your name"
                defaultValue={user?.displayName}
                type="text"
                name="name"
                className="border border-[#c2c5c7] focus-within:outline-[#FBB04B] block w-full py-3 px-3 mt-2 rounded-md mb-5"
              />
              <label className="text-[#1A2D62] font-semibold" htmlFor="">
                Your email
              </label>
              <input
                placeholder="Enter your name"
                defaultValue={user?.email}
                type="text"
                name="email"
                className="border border-[#c2c5c7] focus-within:outline-[#FBB04B] block w-full py-3 px-3 mt-2 rounded-md mb-5"
              />
              <label className="text-[#1A2D62] font-semibold" htmlFor="">
                Return date
              </label>
              <input
                type="date"
                name="date"
                id=""
                className="border border-[#c2c5c7] focus-within:outline-[#FBB04B] block w-full py-3 px-3 mt-2 rounded-md"
              />
              <input
                type="submit"
                value="Submit"
                className="w-full hover:border-2 text-white hover:border-[#FBB04B] hover:bg-white hover:text-[#FBB04B] font-semibold bg-[#FBB04B] py-3 text-xl hover:transition hover:duration-500 mt-8 rounded-md mb-6"
              />
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
