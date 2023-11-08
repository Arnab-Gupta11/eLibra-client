import Swal from "sweetalert2";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
const UpdateBooks = () => {
  const navigate = useNavigate();
  const loadedBook = useLoaderData();
  const { _id, image, name, authore_name, category, rating } = loadedBook;
  const handleUpdateBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const authore_name = form.authore.value;
    const category = form.category_name.value;
    const rating = parseFloat(form.rating.value);
    const image = form.image.value;

    const updateBook = { image, name, authore_name, rating, category };
    console.log(updateBook);
    // Send data to the server
    axios.put(`https://library-management-server-ashen.vercel.app/books/${_id}`, updateBook).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "Books updated successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
      navigate("/all-books");
    });
  };

  const backgroundStyle = {
    minHeight: "100vh",
    backgroundImage: 'url("https://i.ibb.co/VvkdZpM/add-bg.png")',
    backgroundSize: "cover",
  };
  return (
    <div className="min-h-screen bg-base-200 z-0" style={backgroundStyle}>
      <div className="max-w-screen-xl mx-auto pt-16">
        <h2 className="text-5xl font-bold border-l-8 border-[#FBB04B] text-[#1A2D62] pl-4 mb-10 ml-5 ">Update books</h2>
        <form className="px-5" onSubmit={handleUpdateBook}>
          {/* form row */}
          <div className="flex gap-5 mb-5">
            <div className="w-1/2">
              <label className="text-[#1A2D62]" htmlFor="">
                Name
              </label>
              <input
                required
                defaultValue={name}
                type="text"
                name="name"
                placeholder="Enter Book name"
                id=""
                className="border border-[#c2c5c7] focus-within:outline-[#FBB04B] block w-full py-3 px-3 mt-2 rounded-md"
              />
            </div>
            <div className="w-1/2">
              <label className="text-[#1A2D62]" htmlFor="">
                Author Name
              </label>
              <input
                required
                defaultValue={authore_name}
                type="text"
                name="authore"
                placeholder="Enter Authore name"
                id=""
                className="border border-[#c2c5c7] focus-within:outline-[#FBB04B] block w-full py-3 px-3 mt-2 rounded-md"
              />
            </div>
          </div>
          {/* form row */}
          <div className="flex gap-5 mb-5">
            <div className="w-1/2">
              <label className="text-[#1A2D62]" htmlFor="">
                Category name
              </label>
              <select
                required
                name="category_name"
                placeholder="select brand"
                className="border border-[#c2c5c7] focus-within:outline-[#FBB04B] block w-full py-3 px-3 mt-2 rounded-md"
                defaultValue={category}
              >
                <option value="" disabled hidden>
                  Choose a Category
                </option>
                <option value="Comic">Comic</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="History">History</option>
                <option value="Horror">Horror</option>
              </select>
            </div>
            <div className="w-1/2">
              <label className="text-[#1A2D62]" htmlFor="">
                Rating
              </label>
              <input
                required
                defaultValue={rating}
                type="text"
                name="rating"
                placeholder="Enter book rating"
                id=""
                className="border border-[#c2c5c7] focus-within:outline-[#FBB04B] block w-full py-3 px-3 mt-2 rounded-md"
              />
            </div>
          </div>
          {/* form row */}
          <div className="flex gap-5 mb-5">
            <div className="w-full">
              <label className="text-[#1A2D62]" htmlFor="">
                Image
              </label>
              <input
                required
                defaultValue={image}
                type="text"
                name="image"
                placeholder="Enter Book photo URL"
                id=""
                className="border border-[#c2c5c7] focus-within:outline-[#FBB04B] block w-full py-3 px-3 mt-2 rounded-md"
              />
            </div>
          </div>
          {/* form row */}

          {/* button */}
          <div className=" mt-8 pb-10">
            <input
              type="submit"
              value="Update Book"
              className="w-full hover:border-2 text-white hover:border-[#FBB04B] hover:bg-white hover:text-[#FBB04B] font-semibold bg-[#FBB04B] py-3 text-xl hover:transition hover:duration-500 mt-8 rounded-md"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBooks;
