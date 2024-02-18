import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full max-w-[90rem] z-50 bg-gradient-to-r from-[#061C3D]/70 to-[#061C3D]">
      <header className="flex justify-center items-center h-12 sm:h-24 px-5 2xl:px-0">
        <nav className="flex justify-between items-center w-full max-w-7xl h-12 mx-auto">
          <h1 className="text-[24px] sm:text-[32px] text-white font-bold text-nowrap">
            Event <span className="text-[#FFD600]">360</span>
          </h1>

          <ul className="text-[12px] sm:text-[16px] text-white font-medium space-x-4">
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
