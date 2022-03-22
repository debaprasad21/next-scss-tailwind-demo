const Header = () => {
  return (
    <div className="bg-red-500 fixed w-full top-0 z-10">
      <div className="container py-5">
        <div className="flex justify-between xl:head-1 lg:head-2 head-3 text-white">
          <div>logo</div>
          <div className="flex">
            <p className="mr-4">login</p>
            <p>sign up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
