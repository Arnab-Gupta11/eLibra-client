import PropTypes from "prop-types";
import Rating from "../../Shared/Rating/Rating";
import { Link } from "react-router-dom";
const BooksCard = ({ book }) => {
  const { image, name, authore_name, rating, category, _id } = book;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl rounded-b-md">
        <div>
          <figure>
            <img src={image} alt="Shoes" className="h-80 w-full rounded-t-md brightness-75" />
          </figure>
        </div>
        <div className="mt-7 ml-5 ">
          <div className="mt-3 mb-6">
            <span className="bg-[#2ECA7F] px-4 py-2 rounded-lg text-white font-semibold">{category}</span>
          </div>
          <h2 className="card-title text-[#1A2D62]">{name}</h2>
          <h3 className="text-[#676767]">{authore_name}</h3>
          <div className="flex justify-between mb-6 items-center pr-5">
            <div className="text-[#2ECA7F] text-xl">{<Rating rating={rating}></Rating>}</div>
            <div>
              <Link to={`/${category}/${_id}`}>
                <button className="rounded-md hover:bg-[#2ECA7F] normal-case hover:text-white px-5 text-base font-semibold py-3 bg-white border-2 border-[#2ECA7F] text-[#2ECA7F] ">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
BooksCard.propTypes = {
  book: PropTypes.object,
};
export default BooksCard;
