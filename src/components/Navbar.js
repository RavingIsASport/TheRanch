import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showBtn, setShow] = useState(true);

  function handleClick() {
    setShow((showBtn) => !showBtn);
  }

  return (
    <nav className=" bg-slate-200 rounded flex flex-wrap justify-between items-center mx-auto">
      <div>
        <h1 className="ml-5 font-Courgette text-4xl md:text-5xl animate-title text-slate-900 ">
          <Link to="/">Mariposas</Link>
        </h1>
      </div>
      {/* mobile nav */}
      <button
        type="button"
        className="m-5 md:hidden p-1  hover:bg-sky-400"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 25 25"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <div
        className={`${
          showBtn ? "hidden" : ""
        } text-slate-900 w-full md:block md:w-auto md:p-4 rounded-lg`}
      >
        <ul className="grid justify-center md:flex md:flex-row md:justify-between md:gap-x-6 md:mt-0 md:text-md md:font-medium rounded-sm">
          <Link to="/ranch" className="text-xl">
            <li className="block py-2 pr-4 pl-3 rounded-md hover:bg-green-800  hover:text-slate-100">
              The Ranch
            </li>
          </Link>
          <Link to="/gallery" className="text-xl">
            <li className="block py-2 pr-4 pl-3 rounded-md hover:bg-green-800  hover:text-slate-100">
              Gallery
            </li>
          </Link>
          <Link to="/contact" className="text-xl">
            <li className="block py-2 pr-4 pl-3 rounded-md hover:bg-green-800  hover:text-slate-100">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
