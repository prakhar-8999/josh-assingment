import {useState} from "react";
import logo from "../assets/Logo.png";

const navItems = [
  {name: "Home", link: "home"},
  {name: "Skills", link: "skills"},
  {name: "Education", link: "education"},
  {name: "Projects", link: "projects"},
  {name: "Recommendations", link: "recommendations"},
  {name: "Contact", link: "contact"},
];

const Navbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 shadow-xl h-[15vh] fixed w-full top-0 overflow-hidden">
        <div className="ml-12 flex items-center">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-x-3 xl:gap-x-5 items-center">
          {navItems.map((each, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`${
                index === currentIndex ? "bg-primary" : ""
              } font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2`}
            >
              {each.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
