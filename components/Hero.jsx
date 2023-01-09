import Image from "next/image";

import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";

// import heroImg from "../assets/images/mobile/image-hero.jpg";
import css from "./Hero.module.css";

const Hero = ({ setIsOpen }) => {
  const handleMenuClick = () => {
    setIsOpen((prevIsIOpen) => !prevIsIOpen);
  };
  return (
    <div className="h-[100vh] bg-hero-img-mobile bg-cover bg-no-repeat px-6 sm:bg-hero-img-desktop  lg:h-fit  lg:px-16 lg:pb-[8rem] xl:px-32">
      <header className=" flex items-center justify-between py-6 text-[#fff]  lg:py-16">
        <div className="">
          <Image src={logo} alt="loopstudios" className="h-[20px] w-[120px] object-contain lg:h-[40px] lg:w-[200px]" />
        </div>

        <ul className="hidden sm:flex sm:items-center  sm:gap-x-4 sm:text-sm md:gap-x-6 lg:text-xl">
          <li className={`${css.navItem} cursor-pointer `}>About</li>
          <li className={`${css.navItem} cursor-pointer `}>Careers</li>
          <li className={`${css.navItem} cursor-pointer `}>Events</li>
          <li className={`${css.navItem} cursor-pointer `}>Products</li>
          <li className={`${css.navItem} cursor-pointer `}>Support</li>
        </ul>

        <div className="cursor-pointer p-4 sm:hidden" onClick={handleMenuClick}>
          <Image src={hamburger} alt="menu-icon" />
        </div>
      </header>
      <div className="mt-[20vh]  p-4 font-josefin-sans text-4xl  font-light text-gray-200 outline outline-2  outline-gray-200  sm:w-fit sm:p-8 sm:pr-32 sm:text-5xl lg:mt-[2rem] lg:p-6 lg:pr-32  lg:text-6xl">
        <p>IMMERSIVE </p>
        <p> EXPERIENCES </p>
        <p className="sm:hidden"> THAT </p>
        <p className="sm:hidden"> DELIVER</p>
        <p className="hidden sm:block ">THAT DELIVER</p>
      </div>
    </div>
  );
};

export default Hero;
