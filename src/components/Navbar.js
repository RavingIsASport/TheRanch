import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showBtn, setShow] = useState(true);

  function handleClick() {
    setShow((showBtn) => !showBtn);
  }

  return (
    <nav className="bg-third flex justify-between py-4 md:py-3">
      <h1 className="ml-5 font-RobotoSlab font-extrabold text-xl text-first md:text-base mt-1">
        <Link to="/">Mariposas Ranch</Link>
      </h1>

      {/* mobile nav */}
      {showBtn ? (
        <button
          type="button"
          className="md:hidden p-1 mr-2 rounded hover:bg-second"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
      ) : (
        <button
          type="button"
          className="md:hidden p-1 mr-2 rounded hover:bg-second"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}

      <ul
        className={`${
          showBtn ? "-top-full fixed" : "top-0 absolute"
        } flex flex-col text-center font-RobotoSlab w-full divide-y bg-second mt-[60px] transition-all duration-400 ease-in md:divide-none md:top-0 md:flex-row md:items-center md:m-auto md:absolute md:w-auto md:right-0 md:bg-inherit`}
      >
        <Link
          onClick={handleClick}
          to="/"
          className={`
          py-4 px-8 list-none text-third hover:bg-neutral-100/50 hover:text-fifth md:text-fifth md:text-sm md:hover:bg-fifth md:hover:text-third`}
        >
          Home
        </Link>

        <Link
          onClick={handleClick}
          to="/ranch"
          className={`
          py-4 px-8 list-none text-third hover:bg-neutral-100/50 hover:text-fifth md:text-fifth md:text-sm md:hover:bg-fifth md:hover:text-third`}
        >
          About
        </Link>

        <Link
          onClick={handleClick}
          to="/gallery"
          className={`
          py-4 px-8 list-none text-third hover:bg-neutral-100/50 hover:text-fifth md:text-fifth md:text-sm md:hover:bg-fifth md:hover:text-third`}
        >
          The Animals
        </Link>
        <Link
          onClick={handleClick}
          to="/contact"
          className={`
          py-4 px-8 list-none text-third hover:bg-neutral-100/50 hover:text-fifth md:text-fifth md:text-sm md:hover:bg-fifth md:hover:text-third`}
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
