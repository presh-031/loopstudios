import Image from "next/image";
import React from "react";

import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";

import css from "./Hero.module.css";

const Footer = () => {
  return (
    <footer className=" bg-black py-16 px-6 text-center font-alata text-[#fff] md:flex md:items-center md:justify-between lg:px-16 xl:px-32">
      <div className=" lg:text-left">
        <Image src={logo} alt="logo" width={120} height={20} className=" mx-auto mb-8  sm:w-40 md:m-0" />
        <div>
          <ul className="flex flex-col items-center gap-8 text-sm   md:flex-row lg:text-xl">
            <li className={`${css.navItem} w-fit cursor-pointer`}>About</li>
            <li className={`${css.navItem} w-fit cursor-pointer`}>Careers</li>
            <li className={`${css.navItem} w-fit cursor-pointer`}>Events</li>
            <li className={`${css.navItem} w-fit cursor-pointer`}>Products</li>
            <li className={`${css.navItem} w-fit cursor-pointer`}>Support</li>
          </ul>
        </div>
      </div>
      <div className="flex h-[100%] flex-col justify-between ">
        <div className="mt-12 flex justify-center gap-4  md:m-0 md:mb-2 md:justify-end">
          <Image
            src={facebook}
            alt="facebook"
            height={20}
            width={20}
            className={`${css.navItem} cursor-pointer object-cover`}
          />

          <Image
            src={twitter}
            alt="twitter"
            height={20}
            width={20}
            className={`${css.navItem} cursor-pointer object-cover`}
          />

          <Image
            src={pinterest}
            alt="pinterest"
            height={20}
            width={20}
            className={`${css.navItem} cursor-pointer object-cover`}
          />

          <Image
            src={instagram}
            alt="instagram"
            height={20}
            width={20}
            className={`${css.navItem} cursor-pointer object-cover`}
          />
        </div>
        <p className="mt-4 text-center text-sm md:m-0 lg:text-right lg:text-xl">
          &#169; 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
