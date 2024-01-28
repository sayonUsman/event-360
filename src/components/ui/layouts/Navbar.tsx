import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full z-99 px-5 xl:px-0">
      <header className="flex justify-center items-center w-full max-w-[1440px] h-24 mx-auto">
        <nav className="flex justify-between items-center w-full max-w-7xl h-12 mx-auto">
          <h1 className="text-[32px] font-bold text-nowrap">
            Event <span className="text-[#FFD600]">360</span>
          </h1>

          <ul className="text-[16px] font-medium space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
