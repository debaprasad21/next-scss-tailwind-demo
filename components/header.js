const Header = () => {
  return (
    <div className="bg-primary-red-persian fixed w-full top-0 z-20">
      <div className="container py-5">
        <div className="flex justify-between xl:head-1 lg:head-2 head-3 text-primary-white">
          <div className="cursor-pointer">logo</div>
          <div className="flex">
            <p className="mr-4 cursor-pointer">login</p>
            <p className="cursor-pointer">sign up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
