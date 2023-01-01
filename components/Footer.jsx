import Image from "next/image";
import React from "react";

import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";
const Footer = () => {
  return (
    <footer className="bg-black py-16 text-center font-alata text-[#fff]">
      <div>
        <Image src={logo} alt="logo" width={120} height={20} className="mx-auto mb-8" />
        <div>
          <ul className="flex flex-col gap-8 ">
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="mt-12 flex justify-center gap-4">
          <Image src={facebook} alt="facebook" height={20} width={20} />
          <Image src={twitter} alt="twitter" height={20} width={20} />
          <Image src={pinterest} alt="pinterest" height={20} width={20} />
          <Image src={instagram} alt="instagram" height={20} width={20} />
        </div>
        <p className="mt-4 text-center">&#169; 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
