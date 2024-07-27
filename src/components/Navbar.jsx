import {MenuFoldOutlined} from "@ant-design/icons";
import {Drawer} from "antd";
import {useState} from "react";
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

  const [isOpen, setIsOpen] = useState(false);

  const goOnRoute = (route) => {
    navigate(route);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 bg-white shadow-xl h-[15vh] fixed w-full top-0 overflow-hidden z-50">
        <div className="ml-2 sm:ml-12 flex items-center justify-between">
          <img src={logo} alt="logo" />
          <div className="sm:hidden flex items-center mr-12 cursor-pointer">
            <MenuFoldOutlined
              style={{fontSize: "30px"}}
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>

        <div className="hidden -ml-24 sm:flex lg:gap-x-3 items-center">
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

      <Drawer
        placement="right"
        width={250}
        onClose={() => setIsOpen(false)}
        open={isOpen}
      >
        <div>
          {navItems.map((each, index) => (
            <p
              className={`text-xl font-semibold mb-4 cursor-pointer ${
                each.link === location?.pathname ? "text-primary" : ""
              }`}
              key={index}
              onClick={() => {
                setIsOpen(false);
                goOnRoute(each.link);
              }}
            >
              {each.name}
            </p>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
