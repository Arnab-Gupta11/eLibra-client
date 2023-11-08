import PropTypes from "prop-types";
import Rating from "../../Shared/Rating/Rating";
const ReviewCard = ({ reviewCard }) => {
  const { name, photo, review, occupation, color, rating } = reviewCard;
  console.log(rating);
  return (
    <div>
      <div>
        <div className="relative flex w-96 mt-5 ml-5 flex-col bg-white text-gray-700 rounded-md shadow-xl shadow-blue-300">
          <div className="mb-6 px-5 h-32 ">
            <h2 className="text-amber-400 text-2xl my-5">
              <Rating rating={rating}></Rating>
            </h2>
            <p className="block text-base text-justify font-light leading-relaxed text-inherit antialiased">{review}</p>
          </div>
          <div className="w-full" style={{ backgroundColor: color }}>
            <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none px-5">
              <img src={photo} className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center" />

              <div className="">
                <h5 className="block text-xl font-semibold text-blue-gray-900 text-start">{name}</h5>
                <h2 className="text-start">{occupation}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ReviewCard.propTypes = {
  reviewCard: PropTypes.object,
};
export default ReviewCard;
