import { useLoaderData } from "react-router-dom";

const ReadStory = () => {
  const story = useLoaderData();
  console.log(story);
  return (
    <div>
      <h2>read</h2>
    </div>
  );
};

export default ReadStory;
