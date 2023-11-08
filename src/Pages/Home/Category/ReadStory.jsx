import { useLoaderData } from "react-router-dom";

const ReadStory = () => {
  const story = useLoaderData();
  console.log(story);
  const { short_description, name, authore_name } = story;
  return (
    <div className="min-h-screen">
      <div className="mt-15">
        <div className="max-w-7xl mx-auto bg-gray-50 mt-14 text-center">
          <h1 className="text-xl font-bold text-[#1A2D62] pt-10">{name}</h1>
          <p className="tex-lg">{authore_name}</p>
          <p className="text-justify text-gray-400 px-5 md:px-10 pb-10">{short_description}</p>
        </div>
      </div>
    </div>
  );
};

export default ReadStory;
