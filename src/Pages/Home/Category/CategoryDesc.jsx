const CategoryDesc = () => {
  return (
    <div>
      <h3 className="text-[#2ECA7F] text-lg md:text-xl font-semibold mb-4">Checkout All Categories</h3>
      <h1 className="text-[#1A2D62] text-2xl font-bold md:text-7xl mb-20">
        Lets Browse All <span className="text-[#2ECA7F]">Categories</span>
      </h1>
      <p className="text-[#676767] text-base font-medium md:text-lg mb-7 space-y-3">
        Dive into a world of literary diversity with our carefully curated categories. Whether you are a fan of thrilling mysteries, heartwarming
        romance, epic fantasy, or thought-provoking non-fiction, our categories offer something for every reader. Find your next adventure within our
        collection of genres and expand your horizons with every turn of the page.
      </p>
      <button className="rounded-[100px] hover:bg-[#2ECA7F] normal-case hover:text-white px-7 text-base font-semibold py-3 bg-white border-2 border-[#2ECA7F] text-[#2ECA7F] ">
        Read More
      </button>
    </div>
  );
};

export default CategoryDesc;
