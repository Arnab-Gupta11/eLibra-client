const About = () => {
  return (
    <div className=" py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl gap-8 items-center mx-auto">
        <div>
          <img src="https://i.ibb.co/Bw8kPjZ/about.png " alt="" />
        </div>
        <div>
          <div className="text-center  px-5 lg:px-0 lg:text-start">
            <h2 className="text-[#2ECA7F] text-2xl font-semibold mb-3">About us</h2>
            <h1 className="text-5xl font-bold text-[#1A2D62] mb-4">Cultivating Knowledge, Empowering Minds.</h1>
            <p className="text-base text-gray-600 font-medium mt-3 text-justify">
              Welcome to eLibra, a comprehensive and user-friendly solution for efficient library administration. Our system is designed to simplify
              the management of books, patrons, and library operations, providing librarians and staff with the tools they need to streamline their
              tasks. With our system, you can easily catalog and organize your librarys collection, track loans, manage memberships, and more. We are
              committed to enhancing the library experience for both staff and patrons, making it easier to access and manage resources. Explore our
              Library Management System to discover how we can help your library thrive in the digital age.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
