import {useLocation, useNavigate} from "react-router-dom";
import logo from "../assets/Logo.png";

const navItems = [
  {name: "Home", link: "/"},
  {name: "Skills", link: "/skills"},
  {name: "Education", link: ""},
  {name: "Projects", link: ""},
  {name: "Recommendations", link: ""},
  {name: "Contact", link: ""},
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const goOnRoute = (route) => {
    navigate(route);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 bg-white shadow-xl h-[15vh] fixed w-full top-0 overflow-hidden z-50">
        <div className="ml-12 flex items-center">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden sm:flex gap-x-3 xl:gap-x-5 items-center">
          {navItems.map((each, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goOnRoute(each.link)}
              className={`${
                each.link === location?.pathname ? "bg-primary" : ""
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
