import PropTypes from "prop-types";
import Rating from "../Shared/Rating/Rating";
import { Link } from "react-router-dom";
const AllBooksCard = ({ book }) => {
  const { image, name, authore_name, rating, category } = book;
  return (
    <div>
      <div className="bg-white border border-gray-200 rounded-lg shadow ">
        <a href="#">
          <img className="p-8 rounded-t-lg h-80 w-full" src={image} alt="product image" />
        </a>
        <div className="px-5 pb-5">
          <div className="text-amber-400 text-xl">{<Rating rating={rating}></Rating>}</div>

          <div className="mt-6 mb-6">
            <span className="text-[#2ECA7F] font-bold">{category}</span>
            <h2 className="text-lg font-bold text-[#1A2D62] ">{name}</h2>
            <h3 className="text-[#676767]">{authore_name}</h3>
          </div>

          <div className="flex justify-end">
            <Link to={``}>
              <button className="rounded-md hover:bg-[#2ECA7F] normal-case hover:text-white px-5 text-base font-semibold py-2 bg-white border-2 border-[#2ECA7F] text-[#2ECA7F] ">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
AllBooksCard.propTypes = {
  book: PropTypes.object,
};
export default AllBooksCard;
