import { useLoaderData } from "react-router-dom";
import CategoryDesc from "./CategoryDesc";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 px-6 lg:px-0 lg:grid-cols-2 gap-7 my-16 ">
        <div className="">
          <CategoryDesc></CategoryDesc>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {categories.map((category) => (
            <CategoryCard key={category._id} category={category}></CategoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
