import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";
const CategoryCard = ({ category }) => {
  const { name, image } = category;
  return (
    <div>
      <div className="card bg-[#E9FBFA] shadow-2xl">
        <figure className="brightness-50">
          <img src={image} alt="Shoes" className="h-56 w-full" />
        </figure>
        <div className="flex items-center justify-between my-4 px-3">
          <h2 className="card-title text-xl font-semibold text-[#1A2D62]">{name}</h2>
          <div className="">
            <button className="rounded-full px-3 py-2 hover:bg-[#2ECA7F] normal-case hover:text-white text-xl font-semibold border-2 border-[#2ECA7F] text-[#2ECA7F]">
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
CategoryCard.propTypes = {
  category: PropTypes.object,
};
export default CategoryCard;
