import { useLoaderData } from "react-router-dom";
import Rating from "../../Shared/Rating/Rating";

const BookDetails = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  const { name, image, rating, authore_name, quantity, short_description, category } = loadedData;
  return (
    <div className="bg-[#F6F9FF] min-h-screen">
      <div className="max-w-screen-lg mx-auto pt-20">
        <h2 className="text-3xl font-bold border-l-8 border-[#FBB04B] text-[#1A2D62] ml-6 lg:ml-0 pl-4 mb-5">{category} books</h2>

        <div className="grid grid-cols-1 px-4 lg:px-0 md:grid-cols-12 gap-4 lg:gap-7">
          <div className="md:col-span-4">
            <div className="relative">
              <img src={image} alt="" className="w-full h-[400px] brightness-90" />
              <div className="absolute bottom-0 right-0 ">
                <p className="bg-[#20ce7a] px-4 py-2 rounded-lg text-white font-semibold">{quantity} Available</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 mt-3">
            <h1 className="text-4xl font-bold text-[#1A2D62]">{name}</h1>
            <h3>
              by <span className="text-[#249961] text-lg font-semibold">{authore_name}</span>
            </h3>
            <p className="my-4">
              <Rating rating={rating}></Rating>
            </p>
            <p className="text-[#676767] text-base font-medium md:text-lg space-y-2 text-justify">
              {short_description}
              <button className="text-lg font-bold text-green-600 hover:underline">Read more...</button>
            </p>

            <div>
              <button className="rounded-md hover:bg-[#2ECA7F] normal-case hover:text-white px-7 text-base font-semibold py-2 bg-white border-2 border-[#2ECA7F] text-[#2ECA7F] mt-3">
                Borrow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
