import Image from "next/image";
import React from "react";

import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";
const Footer = () => {
  return (
    <footer className="bg-black py-16 text-center font-alata text-[#fff] lg:flex lg:items-center lg:justify-between lg:px-32">
      <div className="lg:text-left">
        <Image src={logo} alt="logo" width={120} height={20} className="mx-auto mb-8 lg:mx-0" />
        <div>
          <ul className="flex flex-col gap-8 lg:flex-row ">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Events</li>
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Support</li>
          </ul>
        </div>
      </div>
      <div className="lg:text-right">
        <div className="mt-12 flex justify-center gap-4 lg:m-0 lg:mb-8 lg:justify-end">
          <Image src={facebook} alt="facebook" height={20} width={20} className="cursor-pointer" />
          <Image src={twitter} alt="twitter" height={20} width={20} className="cursor-pointer" />
          <Image src={pinterest} alt="pinterest" height={20} width={20} className="cursor-pointer" />
          <Image src={instagram} alt="instagram" height={20} width={20} className="cursor-pointer" />
        </div>
        <p className="mt-4 text-center">&#169; 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
