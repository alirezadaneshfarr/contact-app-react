const Header = () => {
  return (
    <div className="container mx-auto text-center my-5">
      <h1 className="text-[#304ffe] mb-6 font-bold text-2xl">Contact App</h1>
      <p className="text-[grey]">
        <a
          href="https://github.com/alirezadaneshfarr"
          className="text-[#304ffe] bg-[#bbdefb] px-2 py-1 rounded-md cursor-pointer transition
           hover:bg-[#304ffe] hover:text-[#bbdefb]">
          A.Daneshfar
        </a>{" "}
        | React.js Course
      </p>
    </div>
  );
};

export default Header;
