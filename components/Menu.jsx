import React from "react";

import Image from "next/image";

import logo from "../assets/images/logo.svg";
import close from "../assets/images/icon-close.svg";

import css from "./Hero.module.css";
const Menu = ({ setIsOpen }) => {
  const handleCloseBtnClick = () => {
    setIsOpen(false);
  };
  return (
    <div className="h-[100vh]  bg-black px-6 text-[#fff]">
      <header className=" flex items-center justify-between  py-6">
        <div className="">
          <Image src={logo} alt="loopstudios" width={120} height={20} />
        </div>
        <div className=" cursor-pointer p-4" onClick={handleCloseBtnClick}>
          <Image src={close} alt="menu-icon" />
        </div>
      </header>
      <nav>
        <ul className="mt-[10vh] flex flex-col gap-4 font-josefin-sans text-2xl uppercase">
          <li className={`${css.navItem} w-fit cursor-pointer`}>About</li>
          <li className={`${css.navItem} w-fit cursor-pointer`}>Careers</li>
          <li className={`${css.navItem} w-fit cursor-pointer`}>Events</li>
          <li className={`${css.navItem} w-fit cursor-pointer`}>Products</li>
          <li className={`${css.navItem} w-fit cursor-pointer`}>Support</li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
