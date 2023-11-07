import PropTypes from "prop-types";
const ReviewCard = ({ reviewCard }) => {
  const { name, photo, review, occupation, color, rating } = reviewCard;
  console.log(rating);
  return (
    <div>
      <div>
        <div className="relative flex w-96 h-96  mt-5 ml-5 flex-col rounded-xl bg-white text-gray-700 rounded-tl-full rounded-bl-none rounded-tr-none rounded-br-2xl px-5 py-5 ">
          <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
            <img src={photo} className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center" />
            <div className="">
              <div className="">
                <h5 className="block text-xl font-semibold text-blue-gray-900 text-start">{name}</h5>
                <h2 className="text-start">{occupation}</h2>
              </div>
            </div>
          </div>
          <div className="mb-6 p-0">
            <h2>{rating}</h2>
            <p className="block text-base text-justify font-light leading-relaxed text-inherit antialiased">{review}</p>
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
