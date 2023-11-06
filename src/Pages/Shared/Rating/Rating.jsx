import PropTypes from "prop-types";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const Rating = ({ rating }) => {
  console.log(rating);
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar className="icon" />
        ) : rating >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });
  return (
    <div>
      <h2 className="flex text-green-700 text-lg">{ratingStar}</h2>
    </div>
  );
};
Rating.propTypes = {
  rating: PropTypes.number,
};
export default Rating;
