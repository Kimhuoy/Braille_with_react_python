// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import appStore from "../../store/app";
import idri_logo from "../../assets/idri-logo.png";
import cadt_logo from "../../assets/cadt-logo.png";
import "../../Styles/NavBar.css";

const Navbar = () => {
  const { nav, setNav } = appStore();

  return (
    <div>
      {/* div for navbar */}
      <div className="max-w-[100%] sm:w-full mx-auto px-2 sm:px-6 lg:px-8 p-3 lg:p-4 md:p-4  w-full flex justify-between items-center fixed left-0 z-20  top-0 bg-white shadow-lg">
        <div className="flex items-center">
          <div
            onClick={() => {
              setNav(!nav);
            }}
            className="lg:hidden md:hidden inline-block cursor-pointer mx-2 "
          >
            <Icon icon="mynaui:menu" className="text-xl" />
          </div>
          <img
            src={idri_logo}
            alt="idriLogo"
            className="lg:mx-6 h-5 md:h-6 lg:h-7 md:mx-10"
          />
        </div>

        <div className=" flex justify-between">
          <nav className="hidden lg:inline-block md:inline-block mr-6 navBar">
            <ul className="flex justify-between">
              <li className="lg:mx-6 md:mx-2 font-bold lg:text-xl md:text-base hover:text-blue-400 after:text-blue-400">
                <Link to="/" className="nav-link active:text-blue-400">
                  ទំព័រដើម
                </Link>
              </li>
              <li className="lg:mx-6 md:mx-4 font-bold  lg:text-xl md:text-bas hover:text-blue-400 after:text-blue-400">
                <a
                  href="https://forms.gle/G4y6jdLfKcKAbNL47"
                  className="nav-link "
                >
                  បញ្ចេញមតិ
                </a>
              </li>
              <li className="lg:mx-6 md:mx-2 font-bold lg:text-xl md:text-bas hover:text-blue-400">
                <Link to="/guideline" className="nav-link">
                  ជំនួយ
                </Link>
              </li>
              <li className="lg:mx-6 md:mx-2 font-bold lg:text-xl md:text-bas hover:text-blue-400">
                <Link to="/about" className="nav-link">
                  អំពីយើង
                </Link>
              </li>
            </ul>
          </nav>
          <img
            src={cadt_logo}
            alt="cadtLogo"
            className="mx-8 h-5 md:h-6 lg:h-7 "
          />
        </div>
      </div>

      {/* Menu Overlay*/}
      {nav && (
        <div
          className="bg-black/30 fixed w-full h-screen z-10 top-0 left-0 "
          onClick={() => {
            setNav(!nav);
          }}
        ></div>
      )}

      {/*side drawer menu*/}
      <div
        className={
          nav
            ? "fixed top-0 left-0 lg:w-[270px] w-[75%] sm:w-[40%] h-screen bg-white z-50 duration-300"
            : "fixed top-0 left-[-100%] lg:w-[300px] sm:w-[450px] h-screen z-70 bg-white duration-300"
        }
      >
        <div className="flex flex-row">
          <Icon
            icon="material-symbols:close"
            className="text-2xl mt-4 ml-4 cursor-pointer "
            onClick={() => {
              setNav(!nav);
            }}
          />
          <img src={idri_logo} alt="logo" className="h-8 mt-4 mx-6" />
        </div>
        <nav className="mt-4 mx-4">
          <ul className=" lg:m-8 sm:m-12 flex-col flex">
            <li
              className="sm:text-2xl lg:text-base py-2 flex"
              onClick={() => {
                setNav(!nav);
              }}
            >
              <Link to="/" className=" sm:text-2xl lg:text-base py-2 flex ">
                <Icon icon="ion:home-outline" className="text-2xl mr-5" />
                ទំព័រដើម
              </Link>
            </li>
            <li
              className="sm:text-2xl lg:text-base py-2 flex "
              onClick={() => {
                setNav(!nav);
              }}
            >
              <a
                href="https://forms.gle/G4y6jdLfKcKAbNL47"
                className="sm:text-2xl lg:text-base py-2 flex "
              >
                <Icon
                  icon="material-symbols:feedback-outline-rounded"
                  className="text-2xl mr-5 "
                />
                បញ្ចេញមតិ
              </a>
            </li>
            <li
              className="sm:text-2xl lg:text-base py-2 flex"
              onClick={() => {
                setNav(!nav);
              }}
            >
              <Link
                to="/guideline"
                className=" sm:text-2xl lg:text-base py-2 flex "
              >
                <Icon icon="bx:support" className="text-2xl mr-5" />
                ជំនួយ
              </Link>
            </li>

            <li
              className="sm:text-2xl lg:text-base py-2 flex"
              onClick={() => {
                setNav(!nav);
              }}
            >
              <Link
                to="/about"
                className=" sm:text-2xl lg:text-base py-2 flex "
              >
                <Icon
                  icon="mingcute:information-line"
                  className="text-2xl mr-5"
                />
                អំពីយើង
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
