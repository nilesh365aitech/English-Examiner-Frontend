import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6  flex justify-between items-center">
        <NavLink to={"/"} className="text-2xl mr-9 font-bold text-blue-600">
          EnglishExaminer
        </NavLink>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden mr-10 text-gray-600 hover:text-blue-600 focus:outline-none"
        >
         {isOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:block w-full md:w-auto`}
        >
          <ul className="flex flex-col  md:flex-row md:space-x-4 space-y-2 md:space-y-0 mt-4 md:mt-0">
            <li>
              <a href="#features" className="text-gray-600 hover:text-blue-600">
                Features
              </a>
            </li>
            <li>
              <a href="#benefits" className="text-gray-600 hover:text-blue-600">
                Benefits
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-blue-600"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#faq" className="text-gray-600 hover:text-blue-600">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
