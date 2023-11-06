import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  return (
    <div>
      <h2>details</h2>
    </div>
  );
};

export default BookDetails;
