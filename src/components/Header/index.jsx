import React, { useState } from "react";
import { Button, Img, Text } from "./..";
import { useNavigate } from "react-router-dom";
import { SignUp } from "modals/SignUp";

export default function Header({ ...props }) {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleMentorsClick = () => {
    navigate("/allmentors"); // Navigate to "/allmentors" when Mentors is clicked
  };

  const handleShopClick = () => {
    navigate("/eduvishop");
  };

  const handlecoursesClick = () => {
    navigate("/eduvicourses");
  };

  const handlecoursePricing = () => {
    navigate("/eduvicoursepricing");
  };

  const handlejoinasTeacher = () => {
    navigate("/eduvijoinasteacher");
  };

  const handleSinglementordetails = () => {
    navigate("/singlementordetails");
  };

  const handlemyaccountclick = () => {
    navigate("/SignUp");
  };
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3]= useState(false);

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
    setShowDropdown2(false); // Close the other dropdown when this one is opened
  };

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
    setShowDropdown1(false); // Close the other dropdown when this one is opened
  };
  const toggleDropdown3 = () => {
    setShowDropdown3(!showDropdown3);
    setShowDropdown1(false);
    setShowDropdown2(false);
    }

  return (
    <header {...props}>
      <div className="flex flex-row md:flex-col justify-between w-full mx-auto md:gap-10 md:px-5 max-w-7xl">
        <Img src="images/img_logo.svg" alt="logo_one" className="h-[90px]" />
        <div className="flex flex-row md:flex-col justify-start items-center w-[58%] md:w-full gap-6 md:gap-5">
          <Text
            as="p"
            className="!text-gray-900 !font-medium cursor-pointer"
            onClick={handleShopClick}
          >
            Shop
          </Text>
          <div className="flex flex-row justify-start items-center w-[22%] md:w-full gap-0.5 pr-5">
            <div className="relative inline-block">
              <button
                type="button"
                onClick={toggleDropdown1}
                className="inline-flex w-full justify-center gap-x-1.5 font-medium text-gray-900 "
                aria-expanded={showDropdown1 ? "true" : "false"}
                aria-haspopup="true"
              >
                Kindergarten
                <svg
                  className={`-mr-1 h-5 w-5 text-gray-400 transform transition-transform ${
                    showDropdown1 ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showDropdown1 && (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="text-gray-900 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      English
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                    >
                      Arts
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                    >
                      Music
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                    >
                      Languages
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-start items-center w-[29%] md:w-full gap-0.5 py-[3px] pr-10">
            <div className="relative inline-block ">
              <button
                type="button"
                onClick={toggleDropdown2}
                className="inline-flex w-full justify-center gap-x-1.5 font-medium text-gray-900 "
                aria-expanded={showDropdown2 ? "true" : "false"}
                aria-haspopup="true"
              >
                High School
                <svg
                  className={`-mr-1 h-5 w-5 text-gray-400 transform transition-transform ${
                    showDropdown2 ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showDropdown2 && (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      Mathematics
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                    >
                      Science
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                    >
                      Physics
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                    >
                      Biology
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                    >
                      Chemistry
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-start items-center w-[22%] md:w-full gap-0.5 pr-5">
            <div className="relative inline-block">
              <button
                type="button"
                onClick={toggleDropdown3}
                className="inline-flex w-full justify-center gap-x-1.5 font-medium text-gray-900 "
                aria-expanded={showDropdown3 ? "true" : "false"}
                aria-haspopup="true"
              >
                College
                <svg
                  className={`-mr-1 h-5 w-5 text-gray-400 transform transition-transform ${
                    showDropdown3 ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showDropdown3 && (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="text-gray-900 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      UnderGraduate
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                    >
                      PostGraduates
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                    >
                      PHD
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                    >
                      Medicos
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-start items-center w-[13%] md:w-full gap-0.5 py-[3px] pr-5">
            <Text
              as="p"
              className="!text-gray-900 text-right !font-medium cursor-pointer hover:"
              onClick={handlecoursesClick}
            >
              Courses
            </Text>
          </div>
          <Text
            as="p"
            className="!text-gray-900 !font-medium cursor-pointer"
            onClick={handleMentorsClick}
          >
            Mentors
          </Text>
        </div>
        <div className="flex flex-row justify-between w-[21%] md:w-full">
          <div className="flex flex-row justify-start items-center gap-2.5">
            <Text as="p" className="!text-gray-900 text-right !font-medium">
              Cart (0)
            </Text>
            <Img
              src="images/img_shopping_bag_24.svg"
              alt="shoppingbagtwen"
              className="h-[30px] w-[30px]"
            />
          </div>
          <div className="flex flex-row justify-start items-center pl-[3px] gap-2.5 cursor-pointer">
            <Text
              as="p"
              className="!text-gray-900 text-right !font-medium"
              onClick={handlemyaccountclick}
            >
              My Account
            </Text>
            <Img
              src="images/img_profile_24_outline.svg"
              alt="profiletwentyfo"
              className="h-[30px] w-[30px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
