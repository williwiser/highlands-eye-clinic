import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation } from "react-router";

const Navigation = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const responsiveStyle =
    "flex flex-1 flex-col md:flex-row md:justify-center md:gap-6 absolute md:static w-full top-24 md:top-0 bg-white h-screen md:h-full z-100 border-t md:border-none";

  return (
    <nav className="fixed w-full z-10 border-b bg-white border-gray-200">
      <div className="container mx-auto max-w-6xl flex py-2 items-center">
        <div className="flex flex-1">
          <a href="/">
            <img src="logo.png" className=" size-16" />
          </a>
        </div>
        <button
          className="md:hidden text-3xl mr-2.5"
          onClick={() => setShowNavigation(!showNavigation)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul
          className={`${
            showNavigation
              ? responsiveStyle
              : "hidden md:flex flex-1 justify-center gap-5"
          }`}
        >
          {[
            { label: "Home", to: "/" },
            { label: "About", to: "/about" },
            { label: "Services", to: "/services" },
            { label: "Contact", to: "/contact" },
          ].map(({ label, to }) => (
            <li
              key={to}
              className="border-b md:border-none w-full md:w-min text-center"
            >
              <Link
                to={to}
                className={`group relative w-full h-full p-4 md:p-0 inline-block ${
                  isActive(to) ? "text-gray-800" : "text-gray-600"
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-0 h-[2px] left-0 bg-stone-400 transition-all duration-300 ease-in-out group-hover:w-full ${
                    isActive(to) ? "w-full left-0" : "w-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:flex hidden  flex-1 justify-end items-center">
          <a
            href="https://calendly.com/wanigmena/30min"
            className="py-2 px-4 rounded-md bg-black text-white font-semibold"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
